import Timer from "-/data/interfaces/ITimer.ts";

export default interface ITimerDataController {
  getAllTimers(): Timer[];
  getTimerByName(name: string): Timer | undefined;
  setTimer(newTimer: Timer): Timer | Error;
  editTimer(name: string, editedTimer: Timer): Timer | Error;
}
