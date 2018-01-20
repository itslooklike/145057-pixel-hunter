import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import progressBar from "../components/progressBar";
import screenChanger from "../utils/screenChanger";
import imageGenerator from "../utils/imageGenerator";
import * as S from "../selectors";

const render = (state) => {
  const {game2: game} = S.getGames(state);

  const game2 = (data) =>
    `
      <div class="game">
        <p class="game__task">${game.title}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${game.imgData[0].imgUrl}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photos">
            <span>Фото</span>
          </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paintings">
            <span>Рисунок</span>
          </label>
          </div>
        </form>
        ${progressBar(data, S.getAnswers(data))}
      </div>
    `;

  game.imgData = [imageGenerator(state)];
  const markup = headerAndFooterLayout(elementFromTemplate(game2(state)), state);

  const form = markup.querySelector(`.game__content`);

  const changeLevel = (evt) => {
    const isAnswerRight = evt.target.value === game.imgData[0].cat;

    state.currentGameAnswers.push({
      answerCorrect: isAnswerRight,
      timeForAnswerSpend: 10,
    });

    if (!isAnswerRight) {
      --state.lives;
    }

    screenChanger(state);
  };

  form.addEventListener(`change`, changeLevel);
  state.currentGameLevel = `game2`;

  return markup;
};

export default render;
