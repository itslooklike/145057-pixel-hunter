import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import screenChanger from "../utils/screenChanger";
import progressBar from "../components/progressBar";
import * as S from "../selectors";

const render = (state) => {
  const {game1: game} = S.getGames(state);

  const game1 = (data) =>
    `
      <div class="game">
        <p class="game__task">${game.title}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${game.urls[0]}" alt="Option 1" width="468" height="458">
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
            <img src="${game.urls[1]}" alt="Option 2" width="468" height="458">
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
        ${progressBar(data, data.currentGameAnswers)}
      </div>
    `;

  const markup = headerAndFooterLayout(elementFromTemplate(game1(state)), state);

  const goToNextLevel = (steps) => {
    for (let i in steps) {
      if (!steps[i]) {
        return;
      }
    }

    screenChanger(state);
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

  state.currentGameLevel = `game1`;
  return markup;
};
export default render;
