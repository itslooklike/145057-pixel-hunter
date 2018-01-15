import renderContent from "../utils/renderContent";
import game2 from "../pages/game2";

const gameChanger = (state) => {
  const games = Object.keys(state.gamesList);

  let randomValue = Math.floor(Math.random() * games.length);

  // тут опастность!
  while (games[randomValue] === state.currentScreen) {
    randomValue = Math.floor(Math.random() * games.length);
    console.log(`boom!`);
  }

  renderContent(game2(state));
};

export default gameChanger;
