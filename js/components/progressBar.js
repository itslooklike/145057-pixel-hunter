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

const progressBar = (state) => {
  const html = (data) => `
    <div class="stats">
      <ul class="stats">
        ${Array.from({length: data.rounds})
      .map((_, i) =>
        renderDot(data.answers[i], {fast: data.fastAnswer, slow: data.slowAnswer})
      )
      .join(``)}
      </ul>
    </div>
  `;

  const markup = html(state);

  return markup;
};

export default progressBar;
