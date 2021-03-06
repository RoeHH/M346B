import Timer from "-/data/interfaces/ITimer.ts";
import ITimerDataController from "-/data/interfaces/ITimerDataController.ts";

export const TimerDataController: ITimerDataController =
  class TimerDataController {
    private constructor() {}

    static getTimerByName(name: string): Timer | undefined {
      return this.getAllTimers().filter((t) => t.name === name).at(0);
    }

    static setTimer(newTimer: Timer): Timer {
      const timers = this.getAllTimers();
      if (timers.filter((t) => t.name === newTimer.name).length > 0) { //Fügt eine Zahl an den Namen an falls dieser schon vorhanden ist.
        newTimer.name = `${newTimer.name}[${
          timers.filter((t) => t.name === newTimer.name).length
        }]`;
      }
      timers.push(newTimer);
      Deno.writeTextFileSync("./timer-data.json", JSON.stringify(timers)); //Speichert den neuen Eintrag
      return newTimer;
    }

    static editTimer(name: string, editedTimer: Timer): Timer {
      if (editedTimer.name === "") return editedTimer;
      const timers = this.getAllTimers();
      if (editedTimer.name === name) {
        Deno.writeTextFileSync(
          "./timer-data.json",
          JSON.stringify(timers.map((t) => t.name === name ? editedTimer : t)),
        );
      } else {
        //Fügt eine Zahl an den Namen an falls dieser schon vorhanden ist.
        if (
          timers.filter((t) => t.name === editedTimer.name)
            .length > 0
        ) {
          editedTimer.name = `${editedTimer.name}[${
            timers.filter((t) => t.name === editedTimer.name).length
          }]`;
        }

        Deno.writeTextFileSync( //Speichert den bearbeiteten Eintrag
          "./timer-data.json",
          JSON.stringify(timers.map((t) => t.name === name ? editedTimer : t)),
        );
      }
      return editedTimer;
    }

    static getAllTimers(): Timer[] {
      return JSON.parse(Deno.readTextFileSync("./timer-data.json"));
    }
  };
