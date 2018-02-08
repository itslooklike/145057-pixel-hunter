import AbstractView from "../../view/AbstractView";

export default class RulesView extends AbstractView {
  get template() {
    return `
      <div class="rules">
        <h1 class="rules__title">Правила</h1>

        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png"
            width="16" height="16" alt="">.<br> Фотографиями или рисунками могут быть оба изображения.<br> На каждую попытку
          отводится 30 секунд.<br> Ошибиться можно не более 3 раз.<br>
          <br> Готовы?
        </p>

        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя" value="default">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>
    `;
  }

  bind() {
    const btn = this._element.querySelector(`.rules__button`);
    const form = this._element.querySelector(`.rules__form`);
    const input = this._element.querySelector(`.rules__input`);

    if (input.value) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }

    form.addEventListener(`input`, (evt) => {
      this.onInput(evt, btn);
    });

    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.onSubmit();
    });
  }

  onInput() {}

  onSubmit() {}
}
