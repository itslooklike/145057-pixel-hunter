import AbstractView from "../view/AbstractView";
import progressBar from "../components/progressBar";
import imageGenerator from "../utils/imageGenerator";
import * as S from "../selectors";

export default class Game3View extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.game = S.getGames(this.state).game3;
  }

  get template() {
    let isPaintingGet = false;
    this.game.imgData = [];

    while (this.game.imgData.length < 3) {
      let tmp = imageGenerator(this.state);

      if (tmp.cat === `paintings` && isPaintingGet) {
        while (this.game.imgData.find((item) => item.imgUrl === tmp.imgUrl)) {
          tmp = imageGenerator(this.state, `photos`);

          console.log(`regenerate1`);
        }
      } else if (tmp.cat === `paintings` && !isPaintingGet) {
        isPaintingGet = true;
      } else if (tmp.cat === `photos` && !isPaintingGet && this.game.imgData.length === 2) {
        tmp = imageGenerator(this.state, `paintings`);
        isPaintingGet = true;
      }

      this.game.imgData.push(tmp);
    }

    console.log(this.game.imgData.map((i) => i.cat));

    return `
      <div class="game">
        <p class="game__task">${this.game.title}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-option="1">
            <img src="${this.game.imgData[0].imgUrl}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected" data-option="2">
            <img src="${this.game.imgData[1].imgUrl}" alt="Option 2" width="304" height="455">
          </div>
          <div class="game__option" data-option="3">
            <img src="${this.game.imgData[2].imgUrl}" alt="Option 3" width="304" height="455">
          </div>
        </form>
        ${progressBar(this.state, S.getAnswers(this.state))}
      </div>
    `;
  }

  bind() {
    this._element
        .querySelector(`.game__content`)
        .addEventListener(`click`, (evt) => this.changeLevel(evt));
  }

  changeLevel() {}
}
