import HeaderController from "../components/HeaderController";
import FooterController from "../components/FooterController";

const mainLayout = (content, state) => {
  const main = document.createElement(`main`);

  main.classList.add(`central`);
  main.appendChild(new HeaderController(state).init());
  main.appendChild(content);
  main.appendChild(new FooterController(state).init());

  return main;
};

export default mainLayout;
