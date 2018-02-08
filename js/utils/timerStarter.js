import timer from "../data/timer";
import headerTimerUpdate from "../components/headerTimerUpdate";
import screenChanger from "../screens/game/game";

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
      headerTimerUpdate(this.currentTime);
    }, 1000);
  },
});

export default timerStarter;
