import StatsView from "./StatsView";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";

export default class StatsController {
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

    return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
