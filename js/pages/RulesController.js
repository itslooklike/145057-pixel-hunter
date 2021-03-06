import RulesView from "./RulesView";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";
import screenChanger from "../utils/screenChanger";

export default class RulesController {
  constructor(state) {
    this.view = new RulesView();
    this.state = state;
  }

  init() {
    this.view.onInput = (evt, btn) => {
      if (evt.target.value === ``) {
        btn.disabled = true;
      } else if (btn.disabled) {
        btn.disabled = false;
      }
    };

    this.view.onSubmit = () => {
      screenChanger(this.state);
    };

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
