import HeaderView from "./HeaderView";
import screenChanger from "../utils/screenChanger";

export default class HeaderController {
  constructor(state) {
    this.view = new HeaderView(state);
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      screenChanger(this.state);
    };

    return this.view.element;
  }
}
