import Game1View from "./Game1View";
import headerAndFooterLayoutView from "../../layout/headerAndFooterLayoutView";
import screenChanger from "./game";
import timerStarter from "../../utils/timerStarter";
import addAnswer from "../../utils/addAnswer";

export default class Game1 {
  constructor(state) {
    this.view = new Game1View(state);
    this.state = state;
  }

  goToNextLevel(steps, timer) {
    for (let i in steps) {
      if (!steps[i].status) {
        return;
      }
    }

    const isAnswerCorrect =
      steps[`question1`].cat === this.view.game.imgData[0].cat &&
      steps[`question2`].cat === this.view.game.imgData[1].cat;

    addAnswer(this.state, isAnswerCorrect, timer);
    screenChanger(this.state);
  }

  init() {
    const timer = timerStarter(this.state, (state) => addAnswer(state));
    timer.start();

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

      this.goToNextLevel(data, timer);
    };

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
