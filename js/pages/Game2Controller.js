import Game2View from "./Game2View";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";

export default class Game2Controller {
  constructor(state) {
    this.view = new Game2View(state);
    this.state = state;
  }

  init() {
    this.view.changeLevel = (evt) => {
      const isAnswerRight = evt.target.value === this.view.game.imgData[0].cat;

      this.state.currentGameAnswers.push({
        answerCorrect: isAnswerRight,
        timeForAnswerSpend: 10,
      });

      if (!isAnswerRight) {
        --this.state.lives;
      }

      console.log(`changeLevel from Game2Controller`, this.state);
    };

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
