import Timer from "-/data/interfaces/ITimer.ts";
import ITimerDataController from "-/data/interfaces/ITimerDataController.ts";

export const TimerDataController: ITimerDataController =
  class TimerDataController {
    private constructor() {}

    static getTimerByName(name: string): Timer {
      return {
        name: "Not implementestd adfkljasdlfja",
        intervale: [1, 1, 34, 2314, 3],
      };
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
      return [
        {
          name: "Abs Workout",
          intervale: [1, 1, 34, 2314, 3],
        },
        {
          name: "Abs Workout2",
          intervale: [1, 1, 34, 2314, 344],
        },
        {
          name: "Abs Workout3",
          intervale: [1, 31, 34, 2314, 3, 99999999999999999999, 1],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
        {
          name: "Abs Workout4",
          intervale: [1, 1, 32344, 2314, 3],
        },
      ];
    }
  };
