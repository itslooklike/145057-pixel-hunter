import * as C from "../constants";

const resultCalc = ({userAnswers, livesLeft}) => {
  const result = {
    history: userAnswers,
    totalScore: 0,
    fastAmount: 0,
    slowAmount: 0,
    livesAmount: 0,
    correctAmount: 0,
    fastScore: 0,
    slowScore: 0,
    livesScore: 0,
    fastCost: C.GAME_ANSWER_FAST_COST,
    slowCost: C.GAME_ANSWER_SLOW_COST,
    livesCost: C.GAME_ANSWER_LIVE_COST,
    correctCost: C.GAME_ANSWER_CORRECT_COST,
  };

  userAnswers.forEach((answer) => {
    if (answer.answerCorrect) {
      result.totalScore += C.GAME_ANSWER_CORRECT_COST;
      result.correctAmount += C.GAME_ANSWER_CORRECT_COST;

      if (answer.timeForAnswerSpend < C.GAME_ANSWER_FAST_TIME) {
        result.totalScore += C.GAME_ANSWER_FAST_COST;
        result.fastScore += C.GAME_ANSWER_FAST_COST;
        result.fastAmount++;
      } else if (answer.timeForAnswerSpend > C.GAME_ANSWER_SLOW_TIME) {
        result.totalScore -= C.GAME_ANSWER_SLOW_COST;
        result.slowScore -= C.GAME_ANSWER_SLOW_COST;
        result.slowAmount++;
      }
    }
  });

  result.totalScore += livesLeft * C.GAME_ANSWER_LIVE_COST;
  result.livesScore += livesLeft * C.GAME_ANSWER_LIVE_COST;
  result.livesAmount = livesLeft;

  return result;
};

export default resultCalc;
