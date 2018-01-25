import elementFromTemplate from "../utils/elementFromTemplate";

export default class AbstractView {
  constructor() {
    this._element = null;
  }

  get template() {
    throw new Error(`функция не переопределена`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }

  render() {
    return elementFromTemplate(this.template.trim());
  }

  bind() {}
}
