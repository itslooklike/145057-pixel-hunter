import elementFromTemplate from "../utils/elementFromTemplate";
import renderContent from "../utils/renderContent";
import headerLives from "./headerLives";
import intro from "../pages/intro";

const header = (state) => {
  const html = (data) => `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
        <h1 class="game__timer">NN</h1>
        ${headerLives(data)}
      </header>
    `;

  const markup = elementFromTemplate(html(state));
  const btn = markup.querySelector(`.back`);

  const changePage = () => {
    renderContent(intro(state));
  };

  btn.addEventListener(`click`, changePage);

  return markup;
};

export default header;
