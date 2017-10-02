import onlyFooterLayout from '../layout/onlyFooterLayout.js';
import elementFromTemplate from '../utils/elementFromTemplate/elementFromTemplate.js';
import renderContent from '../utils/renderContent/renderContent.js';
import greeting from './greeting.js';

const intro = () =>
  `
<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>
`;

const markup = elementFromTemplate(onlyFooterLayout(intro()));

markup.querySelector(`.intro__asterisk`).addEventListener(`click`, evt => {
  renderContent(greeting);
});

export default markup;
