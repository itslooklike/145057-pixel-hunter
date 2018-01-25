import HeaderView from "./HeaderView";

export default class HeaderController {
  constructor(state) {
    this.view = new HeaderView(state);
    this.state = state;
  }

  init() {
    this.view.onClick = () => {
      console.log(`state from HeaderController`, this.state);
    };

    return this.view.element;
  }
}
