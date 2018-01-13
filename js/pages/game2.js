import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import renderContent from "../utils/renderContent";
import game3 from "./game3";

const render = (state) => {
  const game2 = (data) =>
    `
      <div class="game">
        <p class="game__task">${data.game2.title}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${data.game2.urls[0]}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
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

  const markup = headerAndFooterLayout(elementFromTemplate(game2(state)), state);

  const form = markup.querySelector(`.game__content`);

  const changeLevel = () => {
    renderContent(game3(state));
  };

  form.addEventListener(`change`, changeLevel);

  return markup;
};

export default render;
