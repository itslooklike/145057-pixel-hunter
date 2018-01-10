import headerAndFooterLayout from "../layout/headerAndFooterLayout.js";
import elementFromTemplate from "../utils/elementFromTemplate/elementFromTemplate.js";
import renderContent from "../utils/renderContent/renderContent.js";
import game2 from "./game2.js";

const render = () => {
  const game1 = () =>
    `
      <div class="game">
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form class="game__content">
          <div class="game__option">
            <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
            <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
          </div>
          <div class="game__option">
            <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
            <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
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
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </div>
      </div>
    `;

  const markup = headerAndFooterLayout(elementFromTemplate(game1()));

  const goToNextLevel = (steps) => {
    for (let i in steps) {
      if (!steps[i]) {
        return;
      }
    }

    renderContent(game2());
  };

  const form = markup.querySelector(`.game__content`);

  const checkInputs = (evt) => {
    const data = {};
    const inputs = evt.currentTarget.querySelectorAll(`input[type="radio"]`);

    inputs.forEach((item) => {
      const {name, checked} = item;

      if (data[name] === true) {
        return;
      }
      if (checked) {
        data[name] = checked;
      } else {
        data[name] = false;
      }
    });

    goToNextLevel(data);
  };

  form.addEventListener(`change`, checkInputs);

  return markup;
};
export default render;
