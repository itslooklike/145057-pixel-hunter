import state from "../data/state";

const app = document.querySelector(`#mainApp`);

const renderContent = (content) => {
  app.innerHTML = ``;
  app.appendChild(content);

  console.log(`--currentScreen`, state.currentScreen);
};

export default renderContent;
