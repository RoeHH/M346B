import { Handlers } from "-/server_deps.ts";
import Timer from "-/data/interfaces/ITimer.ts";
import { TimerDataController } from "-/data/TimerDataController.ts";

export interface IFromData {
  queryName: string;
  queryInterval: string;
}

export const FormHandler: Handlers<IFromData> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const queryName = url.searchParams.get("name") || "";
    const queryInterval = url.searchParams.get("interval") || "";

    if (queryName !== "" && /^[0-9\,]+$/.test(queryInterval)) { //Ist das Format invalid soll die seite neu angezeigt werden
      const interval = queryInterval.split(",").map((item) =>
        parseInt(item.trim())
      ).filter((i) => i > 0); //Intervalle als von Spring zu array int array parsen

      const timer: Timer = {
        name: decodeURI(queryName),
        intervale: interval,
      };

      if (url.pathname.slice(0, 11) === "/timer/edit") { //Timer überschreiben oder neu erstellen
        TimerDataController.editTimer(decodeURI(ctx.params.name), timer);
      } else {
        TimerDataController.setTimer(timer);
      }
      return Response.redirect(url.origin); //Redirect auf die Startseite
    } else {
      return ctx.render({ queryName, queryInterval }); //Neu renderen bei Fehler
    }
  },
};
