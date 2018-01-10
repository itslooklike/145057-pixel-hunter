import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate/elementFromTemplate";
import renderContent from "../utils/renderContent/renderContent";
import stats from "./stats";

const render = () => {
  const game3 = () =>
    `
      <div class="game">
        <p class="game__task">Найдите рисунок среди изображений</p>
        <form class="game__content  game__content--triple">
          <div class="game__option">
            <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected">
            <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option">
            <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
          </div>
        </form>
        <div class="stats">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </div>
      </div>
    `;

  const markup = headerAndFooterLayout(elementFromTemplate(game3()));

  const form = markup.querySelector(`.game__content`);

  const changeLevel = () => {
    renderContent(stats());
  };

  form.addEventListener(`click`, changeLevel);

  return markup;
};

export default render;
