import GreetingView from "./GreetingView";
import onlyFooterLayoutView from "../layout/onlyFooterLayoutView";
import screenChanger from "../utils/screenChanger";

export default class GreetingController {
  constructor(state) {
    this.view = new GreetingView();
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      screenChanger(this.state);
    };

    return onlyFooterLayoutView(this.view.element, this.state);
  }
}
