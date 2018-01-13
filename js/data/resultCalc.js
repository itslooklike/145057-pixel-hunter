const FAST_ANSWER = 10;
const SLOW_ANSWER = 20;

const resultCalc = ({userAnswers, livesLeft}) => {
  if (userAnswers.length < 10) {
    return -1;
  }

  let totalScore = 0;

  userAnswers.forEach((answer) => {
    if (answer.answerCorrect) {
      totalScore += 100;

      if (answer.timeForAnswerSpend < FAST_ANSWER) {
        totalScore += 50;
      } else if (answer.timeForAnswerSpend > SLOW_ANSWER) {
        totalScore -= 50;
      }
    }
  });

  totalScore += livesLeft * 50;

  return totalScore;
};

export default resultCalc;
