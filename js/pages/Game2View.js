import AbstractView from "../view/AbstractView";
import progressBar from "../components/progressBar";
import imageGenerator from "../utils/imageGenerator";
import * as S from "../selectors";

export default class Game2View extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.game = S.getGames(this.state).game2;
  }

  get template() {
    this.game.imgData = [imageGenerator(this.state)];

    return `
      <div class="game">
        <p class="game__task">${this.game.title}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this.game.imgData[0].imgUrl}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photos">
            <span>Фото</span>
          </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paintings">
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
        .addEventListener(`change`, (evt) => this.changeLevel(evt));
  }

  changeLevel() {}
}
