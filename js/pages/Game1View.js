import AbstractView from "../view/AbstractView";
import progressBar from "../components/progressBar";
import imageGenerator from "../utils/imageGenerator";
import * as S from "../selectors";

export default class Game1View extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.game = S.getGames(this.state).game1;
  }

  get template() {
    this.game.imgData = [];
    this.game.imgData.push(imageGenerator(this.state));

    let tmp = imageGenerator(this.state);

    while (tmp.imgUrl === this.game.imgData[0].imgUrl) {
      tmp = imageGenerator(this.state);
    }

    this.game.imgData.push(tmp);

    console.log(this.game.imgData.map((i) => i.cat));

    return `
      <div class="game">
        <p class="game__task">${this.game.title}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${this.game.imgData[0].imgUrl}" alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photos">
            <span>Фото</span>
          </label>
            <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paintings">
            <span>Рисунок</span>
          </label>
          </div>
          <div class="game__option">
            <img src="${this.game.imgData[1].imgUrl}" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photos">
            <span>Фото</span>
          </label>
            <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paintings">
            <span>Рисунок</span>
          </label>
          </div>
        </form>
        ${progressBar(this.state, S.getAnswers(this.state))}
      </div>
    `;
  }

  bind() {
    this._element
        .querySelector(`.game__content`)
        .addEventListener(`change`, (evt) => this.checkInputs(evt));
  }

  checkInputs() {}
}
