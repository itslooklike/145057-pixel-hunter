import intro from './pages/intro.js';
import greeting from './pages/greeting.js';
import rules from './pages/rules.js';
import game1 from './pages/game1.js';
import game2 from './pages/game2.js';
import game3 from './pages/game3.js';
import result from './pages/result.js';

let currentPage = 0;
const pages = [intro, greeting, rules, game1, game2, game3, result];
const app = document.querySelector(`#mainApp`);

app.innerHTML = pages[currentPage]();

const pageChanger = evt => {
  if (!evt.ctrlKey) return;

  if (evt.key === `ArrowRight` && currentPage < pages.length - 1) {
    app.innerHTML = pages[++currentPage]();
  }

  if (evt.key === `ArrowLeft` && currentPage > 0) {
    app.innerHTML = pages[--currentPage]();
  }
};

document.addEventListener(`keydown`, pageChanger);
