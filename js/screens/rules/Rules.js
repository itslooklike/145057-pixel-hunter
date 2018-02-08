import RulesView from "./RulesView";
import headerAndFooterLayoutView from "../../layout/headerAndFooterLayoutView";
import renderContent from "../../utils/renderContent";
import App from "../../application";

class Rules {
  constructor() {
    this.view = new RulesView();
  }

  init(state) {
    this.state = state;
    this.view.onInput = (evt, btn) => {
      if (evt.target.value === ``) {
        btn.disabled = true;
      } else if (btn.disabled) {
        btn.disabled = false;
      }
    };

    this.view.onSubmit = () => {
      App.showGame(this.state);
    };

    renderContent(headerAndFooterLayoutView(this.view.element, this.state));
  }
}

export default new Rules();
