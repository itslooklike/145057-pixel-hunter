import header from "../components/header";
import footer from "../components/footer";

const mainLayout = (content) => {
  const main = document.createElement(`main`);

  main.classList.add(`central`);
  main.appendChild(header());
  main.appendChild(content);
  main.appendChild(footer());

  return main;
};

export default mainLayout;
