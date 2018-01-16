import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import progressBar from "../components/progressBar";
import * as S from "../selectors";

const render = (state) => {
  const {game2: game} = S.getGames(state);

  const game2 = (data) =>
    `
      <div class="game">
        <p class="game__task">${game.title}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${game.urls[0]}" alt="Option 1" width="705" height="455">
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
        ${progressBar(data, data.currentGameAnswers)}
      </div>
    `;

  const markup = headerAndFooterLayout(elementFromTemplate(game2(state)), state);

  const form = markup.querySelector(`.game__content`);

  const changeLevel = () => {
    // renderContent(game3(state));
  };

  form.addEventListener(`change`, changeLevel);

  state.currentScreen = `game2`;

  return markup;
};

export default render;
