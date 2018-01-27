import Game3View from "./Game3View";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";
import screenChanger from "../utils/screenChanger";
import timerStarter from "../utils/timerStarter";
import addAnswer from "../utils/addAnswer";

export default class Game3Controller {
  constructor(state) {
    this.view = new Game3View(state);
    this.state = state;
  }

  init() {
    const timer = timerStarter(this.state, (state) => addAnswer(state));
    timer.start();

    this.view.changeLevel = (evt) => {
      const isAnswerCorrect =
        this.view.game.imgData[evt.target.dataset.option - 1].cat === `paintings`;

      addAnswer(this.state, isAnswerCorrect, timer);
      screenChanger(this.state);
    };

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
