import Game1View from "./Game1View";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";
import screenChanger from "../utils/screenChanger";

export default class Game1Controller {
  constructor(state) {
    this.view = new Game1View(state);
    this.state = state;
  }

  goToNextLevel(steps) {
    for (let i in steps) {
      if (!steps[i].status) {
        return;
      }
    }

    const isAnswerRight =
      steps[`question1`].cat === this.view.game.imgData[0].cat &&
      steps[`question2`].cat === this.view.game.imgData[1].cat;

    this.state.currentGameAnswers.push({
      answerCorrect: isAnswerRight,
      timeForAnswerSpend: 10,
    });

    if (!isAnswerRight) {
      --this.state.lives;
    }

    screenChanger(this.state);
  }

  init() {
    this.view.checkInputs = (evt) => {
      const data = {};
      const inputs = evt.currentTarget.querySelectorAll(`input[type="radio"]`);

      inputs.forEach((item) => {
        const {name, checked, value} = item;

        if (name in data && data[name].status) {
          return;
        }

        if (checked) {
          data[name] = {status: checked};
          data[name][`cat`] = value;
        } else {
          data[name] = {status: false};
        }
      });

      this.goToNextLevel(data);
    };

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
