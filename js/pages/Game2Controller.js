import Game2View from "./Game2View";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";
import screenChanger from "../utils/screenChanger";
import timerStarter from "../utils/timerStarter";
import addAnswer from "../utils/addAnswer";

export default class Game2Controller {
  constructor(state) {
    this.view = new Game2View(state);
    this.state = state;
  }

  init() {
    const timer = timerStarter(this.state, (state) => addAnswer(state));
    timer.start();

    this.view.changeLevel = (evt) => {
      const isAnswerCorrect = evt.target.value === this.view.game.imgData[0].cat;

      addAnswer(this.state, isAnswerCorrect, timer);
      screenChanger(this.state);
    };

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
