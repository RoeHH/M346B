import Timer from "-/data/interfaces/ITimer.ts";
import ITimerDataController from "-/data/interfaces/ITimerDataController.ts";

export const TimerDataController: ITimerDataController =
  class TimerDataController {
    private constructor() {}

    static getTimerByName(name: string): Timer | undefined {
      return this.getAllTimers().filter((timer) => timer.name === name).at(0);
    }

    static setTimer(timer: Timer): Timer {
      return {
        name: "Not implementestd adfkljasdlfja",
        intervale: [1, 1, 34, 2314, 3],
      };
    }

    static editTimer(name: string, editedTimer: Timer): Timer {
      return {
        name: "Not implementestd adfkljasdlfja",
        intervale: [1, 1, 34, 2314, 3],
      };
    }

    static getAllTimers(): Timer[] {
      return JSON.parse(Deno.readTextFileSync("./timer-data.json"));
    }
  };
