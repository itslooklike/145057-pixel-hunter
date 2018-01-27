// import screenChanger from "./utils/screenChanger";
import state from "./data/state";
import renderContent from "./utils/renderContent";
import IntroController from "./pages/IntroController";
import GreetingController from "./pages/GreetingController";
import RulesController from "./pages/RulesController";
import StatsConroller from "./pages/StatsConroller";
import Game1Controller from "./pages/Game1Controller";
import Game2Controller from "./pages/Game2Controller";
import Game3Controller from "./pages/Game3Controller";

// renderContent(new IntroController(state).init());
// renderContent(new GreetingController(state).init());
// renderContent(new StatsConroller(state).init());
// renderContent(new Game1Controller(state).init());
// renderContent(new Game2Controller(state).init());
renderContent(new Game3Controller(state).init());

// screenChanger(state);
// screenChanger(state, `game3`);
