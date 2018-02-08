import renderContent from "../../utils/renderContent";
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";

import App from "../../application";

const ROTATION_MAP = {
  game1: Game1,
  game2: Game2,
  game3: Game3,
};

const checkForGameExit = (state) => {
  if (state.currentRound >= state.rounds || state.lives <= 0) {
    return true;
  }

  return false;
};

const game = (state) => {
  if (checkForGameExit(state)) {
    App.showStats(state);
    return;
  }

  const games = Object.keys(state.gamesList);
  let randomValue = Math.floor(Math.random() * games.length);

  let attempts = 20;

  while (games[randomValue] === state.currentGameLevel) {
    randomValue = Math.floor(Math.random() * games.length);

    if (--attempts < 0) {
      // eslint-disable-next-line
      console.error(`Не смог сгенерировать игру за 20 попыток`);
      return;
    }
  }

  const nextGameName = games[randomValue];
  state.currentRound++;
  renderContent(new ROTATION_MAP[nextGameName](state).init());

  return;
};

export default game;
