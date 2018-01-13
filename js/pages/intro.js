import elementFromTemplate from "../utils/elementFromTemplate";
import onlyFooterLayout from "../layout/onlyFooterLayout";
import renderContent from "../utils/renderContent";

import greeting from "./greeting";

const render = (state) => {
  const intro = () =>
    `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>
    `;

  const markup = onlyFooterLayout(elementFromTemplate(intro()), state);

  markup.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    renderContent(greeting(state));
  });

  return markup;
};

export default render;
