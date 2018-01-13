import * as C from "../constants";

const renderDot = (status) => {
  if (!status) {
    return `<li class="stats__result stats__result--unknown"></li>`;
  }

  if (!status.answerCorrect) {
    return `<li class="stats__result stats__result--wrong"></li>`;
  }

  if (status.timeForAnswerSpend < C.GAME_ANSWER_FAST_TIME) {
    return `<li class="stats__result stats__result--fast"></li>`;
  } else if (status.timeForAnswerSpend > C.GAME_ANSWER_SLOW_TIME) {
    return `<li class="stats__result stats__result--slow"></li>`;
  }

  return `<li class="stats__result stats__result--correct"></li>`;
};

const progressBar = (state) => {
  const html = (data) => `
    <div class="stats">
      <ul class="stats">
        ${Array.from({length: data.rounds})
      .map((_, i) => renderDot(data.answers[i]))
      .join(``)}
      </ul>
    </div>
  `;

  const markup = html(state);

  return markup;
};

export default progressBar;
