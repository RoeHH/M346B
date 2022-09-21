import Timer from "-/data/interfaces/ITimer.ts";

export default interface ITimerDataController {
  getAllTimers(): Promise<Timer[]>;
  getTimerByName(name: string): Promise<Timer | undefined>;
  setTimer(newTimer: Timer): Promise<Timer>
  editTimer(name: string, editedTimer: Timer):Promise<Timer>;
}
