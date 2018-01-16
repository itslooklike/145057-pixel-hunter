import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import screenChanger from "../utils/screenChanger";

const render = (state) => {
  const rules = () =>
    `
      <div class="rules">
        <h1 class="rules__title">Правила</h1>

        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png"
            width="16" height="16" alt="">.<br> Фотографиями или рисунками могут быть оба изображения.<br> На каждую попытку
          отводится 30 секунд.<br> Ошибиться можно не более 3 раз.<br>
          <br> Готовы?
        </p>

        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>
    `;

  const markup = headerAndFooterLayout(elementFromTemplate(rules()), state);

  const btn = markup.querySelector(`.rules__button`);
  const form = markup.querySelector(`.rules__form`);

  form.addEventListener(`input`, (evt) => {
    if (evt.target.value === ``) {
      btn.disabled = true;
    } else if (btn.disabled) {
      btn.disabled = false;
    }
  });

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    screenChanger(state);
  });

  return markup;
};

export default render;
