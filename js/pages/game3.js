import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import progressBar from "../components/progressBar";
import screenChanger from "../utils/screenChanger";
import imageGenerator from "../utils/imageGenerator";
import * as S from "../selectors";

const render = (state) => {
  const {game3: game} = S.getGames(state);

  const game3 = (data) =>
    `
      <div class="game">
        <p class="game__task">${game.title}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-option="1">
            <img src="${game.imgData[0].imgUrl}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected" data-option="2">
            <img src="${game.imgData[1].imgUrl}" alt="Option 2" width="304" height="455">
          </div>
          <div class="game__option" data-option="3">
            <img src="${game.imgData[2].imgUrl}" alt="Option 3" width="304" height="455">
          </div>
        </form>
        ${progressBar(data, S.getAnswers(data))}
      </div>
    `;

  let isPaintingGet = false;
  game.imgData = [];

  while (game.imgData.length < 3) {
    let tmp = imageGenerator(state);

    if (tmp.cat === `paintings` && isPaintingGet) {
      while (game.imgData.find((item) => item.imgUrl === tmp.imgUrl)) {
        tmp = imageGenerator(state, `photos`);

        console.log(`regenerate1`);
      }
    } else if (tmp.cat === `paintings` && !isPaintingGet) {
      isPaintingGet = true;
    } else if (tmp.cat === `photos` && !isPaintingGet && game.imgData.length === 2) {
      tmp = imageGenerator(state, `paintings`);
      isPaintingGet = true;
    }

    game.imgData.push(tmp);
  }

  const markup = headerAndFooterLayout(elementFromTemplate(game3(state)), state);
  const form = markup.querySelector(`.game__content`);

  const changeLevel = (evt) => {
    const isAnswerRight = game.imgData[evt.target.dataset.option - 1].cat === `paintings`;

    state.currentGameAnswers.push({
      answerCorrect: isAnswerRight,
      timeForAnswerSpend: 10,
    });

    if (!isAnswerRight) {
      --state.lives;
    }

    screenChanger(state);
  };

  form.addEventListener(`click`, changeLevel);
  state.currentGameLevel = `game3`;

  return markup;
};

export default render;
