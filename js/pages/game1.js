import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import renderContent from "../utils/renderContent";
import progressBar from "../components/progressBar";
import game2 from "./game2";

const render = (state) => {
  const game1 = (data) =>
    `
      <div class="game">
        <p class="game__task">${data.game1.title}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${data.game1.urls[0]}" alt="Option 1" width="468" height="458">
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
            <img src="${data.game1.urls[1]}" alt="Option 2" width="468" height="458">
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
        ${progressBar(data)}
      </div>
    `;

  const markup = headerAndFooterLayout(elementFromTemplate(game1(state)), state);

  const goToNextLevel = (steps) => {
    for (let i in steps) {
      if (!steps[i]) {
        return;
      }
    }

    renderContent(game2(state));
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
