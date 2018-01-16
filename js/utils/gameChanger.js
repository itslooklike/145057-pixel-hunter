import renderContent from "../utils/renderContent";
import game1 from "../pages/game1";
import game2 from "../pages/game2";
import game3 from "../pages/game3";

const rotation = {
  game1,
  game2,
  game3,
};

const gameChanger = (state) => {
  const games = Object.keys(state.gamesList);
  let randomValue = Math.floor(Math.random() * games.length);

  let attemps = 20;

  while (games[randomValue] === state.currentGameLevel) {
    randomValue = Math.floor(Math.random() * games.length);

    if (--attemps < 0) {
      return;
    }
  }

  const nextGameName = games[randomValue];
  const nextGameRenderer = rotation[nextGameName];

  renderContent(nextGameRenderer(state));
};

export default gameChanger;
