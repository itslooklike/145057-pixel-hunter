import screenChanger from "./utils/screenChanger";
import state from "./data/state";
import IntroController from "./pages/IntroController";

import renderContent from "./utils/renderContent";
renderContent(new IntroController(state).init());

// screenChanger(state);
// screenChanger(state, `game3`);
