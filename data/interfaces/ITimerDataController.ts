import Timer from "-/data/interfaces/ITimer.ts";

export default interface ITimerDataController {
  getAllTimers(): Timer[];
  getTimerByName(name: string): Timer;
  setTimer(timer: Timer): Timer;
  editTimer(name: string, editedTimer: Timer): Timer;
}
