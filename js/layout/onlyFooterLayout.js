import footer from '../components/footer.js';

const mainLayout = (content) => {
  const main = document.createElement(`main`);

  main.classList.add(`central`);
  main.appendChild(content);
  main.appendChild(footer());

  return main;
};

export default mainLayout;
