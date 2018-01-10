import elementFromTemplate from '../utils/elementFromTemplate/elementFromTemplate.js';
import renderContent from '../utils/renderContent/renderContent.js';
import intro from '../pages/intro.js';

const header = () => {
  const html = () => `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
        <h1 class="game__timer">NN</h1>
        <div class="game__lives">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        </div>
      </header>
    `;

  const markup = elementFromTemplate(html());
  const btn = markup.querySelector(`.back`);

  const changePage = () => {
    renderContent(intro());
  };

  btn.addEventListener(`click`, changePage);

  return markup;
};

export default header;
