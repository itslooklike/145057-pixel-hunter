import HeaderView from "./HeaderView";
import App from "../application";

class Header {
  constructor(state) {
    this.view = new HeaderView(state);
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      App.showIntro();
    };

    return this.view.element;
  }
}

export default Header;
