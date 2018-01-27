import timer from "../data/timer";
import roundTimeUpdate from "../components/roundTimeUpdate";
import screenChanger from "./screenChanger";

const timerStarter = (state, falseCallback) => ({
  interval: null,
  currentTime: state.timeToAnswer,
  clear() {
    clearInterval(this.interval);
  },
  start() {
    const gameTimer = timer(this.currentTime, () => {
      this.clear();
      falseCallback(state);
      screenChanger(state);
    });

    this.interval = setInterval(() => {
      this.currentTime = gameTimer.tick();
      roundTimeUpdate(this.currentTime);
    }, 1000);
  },
});

export default timerStarter;
