import * as C from "../constants";

const resultCalc = ({userAnswers, livesLeft}) => {
  if (userAnswers.length < C.GAME_ROUNDS) {
    return -1;
  }

  let totalScore = 0;

  userAnswers.forEach((answer) => {
    if (answer.answerCorrect) {
      totalScore += C.GAME_ANSWER_CORRECT_COST;

      if (answer.timeForAnswerSpend < C.GAME_ANSWER_FAST_TIME) {
        totalScore += C.GAME_ANSWER_FAST_COST;
      } else if (answer.timeForAnswerSpend > C.GAME_ANSWER_SLOW_TIME) {
        totalScore -= C.GAME_ANSWER_SLOW_COST;
      }
    }
  });

  totalScore += livesLeft * C.GAME_ANSWER_LIVE_COST;

  return totalScore;
};

export default resultCalc;
