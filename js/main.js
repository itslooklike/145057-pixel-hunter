import renderContent from "./utils/renderContent";
import intro from "./pages/intro";
// import stats from "./pages/stats";
import state from "./data/state";

renderContent(intro(state));
// renderContent(stats(state));
