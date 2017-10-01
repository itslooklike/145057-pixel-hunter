import elementFromTemplate from '../elementFromTemplate/elementFromTemplate.js';

const app = document.querySelector(`#mainApp`);

const renderContent = content => {
  app.innerHTML = ``;

  app.appendChild(elementFromTemplate(content));
};

export default renderContent;
