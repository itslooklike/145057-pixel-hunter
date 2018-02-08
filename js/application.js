import Intro from "./screens/intro/Intro";
import Greeting from "./screens/greeting/Greeting";
import Rules from "./screens/rules/Rules";
import Stats from "./screens/stats/Stats";
import game from "./screens/game/game";

import initialState from "./data/state";

export default class Application {
  static showIntro(state = initialState) {
    Intro.init(state);
  }
  static showGreeting(state) {
    Greeting.init(state);
  }
  static showRules(state) {
    Rules.init(state);
  }
  static showGame(state) {
    game(state);
  }
  static showStats(state) {
    new Stats(state).init();
  }
}
