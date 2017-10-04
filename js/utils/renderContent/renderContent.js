const app = document.querySelector(`#mainApp`);

const renderContent = content => {
  app.innerHTML = ``;
  app.appendChild(content);
};

export default renderContent;
