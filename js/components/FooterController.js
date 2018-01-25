import FooterView from "./FooterView";

export default class FooterController {
  constructor(state) {
    this.view = new FooterView();
    this.state = state;
  }

  init() {
    return this.view.element;
  }
}
