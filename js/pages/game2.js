import headerAndFooterLayout from '../layout/headerAndFooterLayout.js';
import elementFromTemplate from '../utils/elementFromTemplate/elementFromTemplate.js';
import renderContent from '../utils/renderContent/renderContent.js';
import game3 from './game3.js';

const game2 = () =>
  `
<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
    </div>
  </form>
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
</div>
`;

const markup = headerAndFooterLayout(elementFromTemplate(game2()));

const form = markup.querySelector(`.game__content`);

const changeLevel = () => {
  renderContent(game3);
};

form.addEventListener(`change`, changeLevel);

export default markup;
