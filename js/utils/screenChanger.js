import renderContent from "../utils/renderContent";
import intro from "../pages/intro";
import greeting from "../pages/greeting";
import rules from "../pages/rules";
import game1 from "../pages/game1";
import game2 from "../pages/game2";
import game3 from "../pages/game3";
import stats from "../pages/stats";

const PAGE_MAP = {
  intro,
  greeting,
  rules,
  stats,
};

const RATATION_MAP = {
  game1,
  game2,
  game3,
};

const checkForGameExit = (state) => {
  if (state.currentRound > state.rounds) {
    return false;
  } else {
    return true;
  }
};

const screenChanger = (state) => {
  console.log(state);
  const {screens, currentScreen} = state;
  let nextScreen;

  if (!currentScreen) {
    nextScreen = `intro`;
  } else if ((currentScreen === `game` && checkForGameExit(state)) || currentScreen === `rules`) {
    // тут ченить придумать
    nextScreen = `game`;
    console.log(state.currentRound);

    const games = Object.keys(state.gamesList);
    let randomValue = Math.floor(Math.random() * games.length);

    let attemps = 20;

    while (games[randomValue] === state.currentGameLevel) {
      randomValue = Math.floor(Math.random() * games.length);

      if (--attemps < 0) {
        console.log(`FUCK`);
        return;
      }
    }

    const nextGameName = games[randomValue];
    const nextGameRenderer = RATATION_MAP[nextGameName];
    renderContent(nextGameRenderer(state));

    // и тут причесать
    state.currentRound++;
    state.currentScreen = `game`;
    return;
  } else {
    nextScreen = screens[currentScreen].nextScreen;
  }

  renderContent(PAGE_MAP[nextScreen](state));

  state.currentScreen = nextScreen;

  // eslint-disable-next-line
  console.log(state.currentScreen);
};

export default screenChanger;