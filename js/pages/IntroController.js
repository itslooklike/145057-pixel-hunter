import IntroView from "./IntroView";
import onlyFooterLayoutView from "../layout/onlyFooterLayoutView";

export default class IntroController {
  constructor(state) {
    this.view = new IntroView();
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      console.log(`onClick from IntroController`, this.state);
    };

    return onlyFooterLayoutView(this.view.element, this.state);
  }
}
