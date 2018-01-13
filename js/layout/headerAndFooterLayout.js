import header from "../components/header";
import footer from "../components/footer";

const mainLayout = (content, state) => {
  const main = document.createElement(`main`);

  main.classList.add(`central`);
  main.appendChild(header(state));
  main.appendChild(content);
  main.appendChild(footer(state));

  return main;
};

export default mainLayout;
