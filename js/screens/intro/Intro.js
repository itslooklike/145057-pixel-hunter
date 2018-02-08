import IntroView from "./IntroView";
import onlyFooterLayoutView from "../../layout/onlyFooterLayoutView";
import renderContent from "../../utils/renderContent";
import App from "../../application";

class Intro {
  constructor() {
    this.view = new IntroView();
  }

  init(state) {
    this.state = state;
    this.view.onClick = () => {
      App.showGreeting(this.state);
    };

    renderContent(onlyFooterLayoutView(this.view.element, this.state));
  }
}

export default new Intro();
