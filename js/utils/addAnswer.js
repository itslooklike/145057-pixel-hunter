const addAnswer = (state, isAnswerCorrect = false, timer) => {
  if (timer) {
    timer.clear();
  }

  const {timeToAnswer, currentGameAnswers} = state;

  currentGameAnswers.push({
    answerCorrect: isAnswerCorrect,
    timeForAnswerSpend:
      timer && timer.currentTime ? timeToAnswer - timer.currentTime : timeToAnswer,
  });

  if (!isAnswerCorrect) {
    --state.lives;
  }
};

export default addAnswer;
