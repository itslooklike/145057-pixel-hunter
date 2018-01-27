import Game3View from "./Game3View";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";

export default class Game3Controller {
  constructor(state) {
    this.view = new Game3View(state);
    this.state = state;
  }

  init() {
    this.view.changeLevel = (evt) => {
      const isAnswerRight =
        this.view.game.imgData[evt.target.dataset.option - 1].cat === `paintings`;

      this.state.currentGameAnswers.push({
        answerCorrect: isAnswerRight,
        timeForAnswerSpend: 10,
      });

      if (!isAnswerRight) {
        --this.state.lives;
      }

      console.log(`changeLevel from Game3Controller`, this.state);
    };

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
