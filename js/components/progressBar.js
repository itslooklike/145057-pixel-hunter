const renderDot = (answer, {fast, slow}) => {
  if (!answer) {
    return `<li class="stats__result stats__result--unknown"></li>`;
  }

  if (!answer.answerCorrect) {
    return `<li class="stats__result stats__result--wrong"></li>`;
  }

  if (answer.timeForAnswerSpend < fast) {
    return `<li class="stats__result stats__result--fast"></li>`;
  }

  if (answer.timeForAnswerSpend > slow) {
    return `<li class="stats__result stats__result--slow"></li>`;
  }

  return `<li class="stats__result stats__result--correct"></li>`;
};

const progressBar = (state, history) => {
  const {rounds, fastAnswerTime, slowAnswerTime} = state;

  return `
    <div class="stats">
      <ul class="stats">
        ${Array.from({length: rounds})
      .map((_, i) => renderDot(history[i], {fast: fastAnswerTime, slow: slowAnswerTime}))
      .join(``)}
      </ul>
    </div>
  `;
};

export default progressBar;
