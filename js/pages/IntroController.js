import IntroView from "./IntroView";
import onlyFooterLayoutView from "../layout/onlyFooterLayoutView";
import headerAndFooterLayoutView from "../layout/headerAndFooterLayoutView";

export default class IntroController {
  constructor(state) {
    this.view = new IntroView();
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      console.log(`state from IntroController`, this.state);
    };

    return onlyFooterLayoutView(this.view.element, this.state);
    // return headerAndFooterLayoutView(this.view.element, this.state);
  }
}
