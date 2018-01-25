import AbstractView from "../view/AbstractView";
import headerLives from "./headerLives";

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
        <h1 class="game__timer">NN</h1>
        ${headerLives(this.state)}
      </header>
    `;
  }

  bind() {
    this._element.querySelector(`.back`).addEventListener(`click`, () => this.onClick());
  }

  onClick() {}
}
