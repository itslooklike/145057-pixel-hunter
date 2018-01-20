import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import progressBar from "../components/progressBar";
import screenChanger from "../utils/screenChanger";
import imageGenerator from "../utils/imageGenerator";
import * as S from "../selectors";

const render = (state) => {
  const {game1: game} = S.getGames(state);

  const game1 = (data) =>
    `
      <div class="game">
        <p class="game__task">${game.title}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${game.imgData[0].imgUrl}" alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photos">
            <span>Фото</span>
          </label>
            <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paintings">
            <span>Рисунок</span>
          </label>
          </div>
          <div class="game__option">
            <img src="${game.imgData[1].imgUrl}" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photos">
            <span>Фото</span>
          </label>
            <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paintings">
            <span>Рисунок</span>
          </label>
          </div>
        </form>
        ${progressBar(data, S.getAnswers(data))}
      </div>
    `;

  game.imgData = [imageGenerator(state), imageGenerator(state)];
  const markup = headerAndFooterLayout(elementFromTemplate(game1(state)), state);

  const goToNextLevel = (steps) => {
    for (let i in steps) {
      if (!steps[i].status) {
        return;
      }
    }

    const isAnswerRight =
      steps[`question1`].cat === game.imgData[0].cat &&
      steps[`question1`].cat === game.imgData[1].cat;

    state.currentGameAnswers.push({
      answerCorrect: isAnswerRight,
      timeForAnswerSpend: 10,
    });

    screenChanger(state);
  };

  const form = markup.querySelector(`.game__content`);

  const checkInputs = (evt) => {
    const data = {};
    const inputs = evt.currentTarget.querySelectorAll(`input[type="radio"]`);

    inputs.forEach((item) => {
      const {name, checked, value} = item;

      if (data[name] && data[name].status) {
        return;
      }

      if (checked) {
        data[name] = {status: checked};
        data[name][`cat`] = value;
      } else {
        data[name] = {status: false};
      }
    });

    goToNextLevel(data);
  };

  form.addEventListener(`change`, checkInputs);
  state.currentGameLevel = `game1`;

  return markup;
};
export default render;
