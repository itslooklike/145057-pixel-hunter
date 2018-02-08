import GreetingView from "./GreetingView";
import onlyFooterLayoutView from "../../layout/onlyFooterLayoutView";
import renderContent from "../../utils/renderContent";
import App from "../../application";

class Greeting {
  constructor() {
    this.view = new GreetingView();
  }

  init(state) {
    this.state = state;
    this.view.onClick = () => {
      App.showRules(this.state);
    };

    renderContent(onlyFooterLayoutView(this.view.element, this.state));
  }
}

export default new Greeting();
