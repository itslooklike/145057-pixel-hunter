import GreetingView from "./GreetingView";
import onlyFooterLayoutView from "../layout/onlyFooterLayoutView";

export default class GreetingController {
  constructor(state) {
    this.view = new GreetingView();
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      console.log(`onClick from GreetingController`, this.state);
    };

    return onlyFooterLayoutView(this.view.element, this.state);
  }
}
