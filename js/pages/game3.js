import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import progressBar from "../components/progressBar";
import * as S from "../selectors";
import screenChanger from "../utils/screenChanger";

const render = (state) => {
  const {game3: game} = S.getGames(state);

  const game3 = (data) =>
    `
      <div class="game">
        <p class="game__task">${game.title}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option">
            <img src="${game.urls[0]}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected">
            <img src="${game.urls[1]}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option">
            <img src="${game.urls[2]}" alt="Option 1" width="304" height="455">
          </div>
        </form>
        ${progressBar(data, data.currentGameAnswers)}
      </div>
    `;

  const markup = headerAndFooterLayout(elementFromTemplate(game3(state)), state);

  const form = markup.querySelector(`.game__content`);

  const changeLevel = () => {
    screenChanger(state);
  };

  form.addEventListener(`click`, changeLevel);

  state.currentGameLevel = `game3`;
  return markup;
};

export default render;
