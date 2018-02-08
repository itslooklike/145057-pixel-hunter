import StatsView from "./StatsView";
import headerAndFooterLayoutView from "../../layout/headerAndFooterLayoutView";
import renderContent from "../../utils/renderContent";

export default class Stats {
  constructor(state) {
    this.view = new StatsView(state);
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

    renderContent(headerAndFooterLayoutView(this.view.element, this.state));
  }
}
