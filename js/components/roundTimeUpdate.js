import renderContent from "../utils/renderContent";
import elementFromTemplate from "../utils/elementFromTemplate";

const roundTimeUpdate = (time) => {
  const timerContainer = document.querySelector(`#gameTimer`);
  const markup = `<span>${time}</span>`;
  const div = elementFromTemplate(markup);

  renderContent(div, {node: timerContainer});
};

export default roundTimeUpdate;
