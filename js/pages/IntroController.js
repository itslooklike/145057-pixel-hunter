import IntroView from "./IntroView";
import onlyFooterLayoutView from "../layout/onlyFooterLayoutView";
import screenChanger from "../utils/screenChanger";

export default class IntroController {
  constructor(state) {
    this.view = new IntroView();
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      screenChanger(this.state);
    };

    return onlyFooterLayoutView(this.view.element, this.state);
  }
}
