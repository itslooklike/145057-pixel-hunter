import renderContent from "../utils/renderContent";
import IntroController from "../pages/IntroController";
import GreetingController from "../pages/GreetingController";
import RulesController from "../pages/RulesController";
import StatsController from "../pages/StatsController";
import Game1Controller from "../pages/Game1Controller";
import Game2Controller from "../pages/Game2Controller";
import Game3Controller from "../pages/Game3Controller";

const PAGE_MAP = {
  intro: IntroController,
  greeting: GreetingController,
  rules: RulesController,
  stats: StatsController,
};

const ROTATION_MAP = {
  game1: Game1Controller,
  game2: Game2Controller,
  game3: Game3Controller,
};

const checkForGameExit = (state) => {
  if (state.currentRound >= state.rounds || state.lives <= 0) {
    return false;
  } else {
    return true;
  }
};

const screenChanger = (state) => {
  const {screens, currentScreen} = state;
  let nextScreen;

  if (!currentScreen) {
    nextScreen = `intro`;
  } else if ((currentScreen === `game` && checkForGameExit(state)) || currentScreen === `rules`) {
    nextScreen = `game`;

    const games = Object.keys(state.gamesList);
    let randomValue = Math.floor(Math.random() * games.length);

    let attempts = 20;

    while (games[randomValue] === state.currentGameLevel) {
      randomValue = Math.floor(Math.random() * games.length);

      if (--attempts < 0) {
        // eslint-disable-next-line
        console.error(`FUCK`);
        return;
      }
    }

    const nextGameName = games[randomValue];

    renderContent(new ROTATION_MAP[nextGameName](state).init());

    state.currentRound++;
    state.currentScreen = `game`;

    return;
  } else {
    nextScreen = screens[currentScreen].nextScreen;
  }

  renderContent(new PAGE_MAP[nextScreen](state).init());
  state.currentScreen = nextScreen;
};

export default screenChanger;
