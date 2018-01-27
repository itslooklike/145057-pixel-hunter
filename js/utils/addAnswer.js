const addAnswer = (state, isAnswerCorrect = false, timer) => {
  if (timer) {
    timer.clear();
  }

  state.currentGameAnswers.push({
    answerCorrect: isAnswerCorrect,
    timeForAnswerSpend: timer ? timer.currentTime || 0 : 0,
  });

  if (!isAnswerCorrect) {
    --state.lives;
  }
};

export default addAnswer;
