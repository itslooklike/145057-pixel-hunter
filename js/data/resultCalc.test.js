import assert from "assert";
import resultCalc from "./resultCalc";

import {lessWhatTen, tenAnswers, tenFastAnswers, tenSlowAnswers} from "./resultCalc.mock";

describe(`Функция подсчёта очков при окончании игры`, () => {
  it(`Если игрок ответил меньше, чем на 10 вопросов, то игра считается не пройденной`, () => {
    const a = {
      userAnswers: lessWhatTen,
      livesLeft: 3,
    };

    assert.equal(-1, resultCalc(a));
  });

  it(`Если игрок ответил на все вопросы не быстро и не медленно и у него остались все жизни`, () => {
    const a = {
      userAnswers: tenAnswers,
      livesLeft: 3,
    };

    assert.equal(1150, resultCalc(a));
  });

  it(`Если игрок ответил на все вопросы быстро и у него остались все жизни`, () => {
    const a = {
      userAnswers: tenFastAnswers,
      livesLeft: 3,
    };

    assert.equal(1650, resultCalc(a));
  });

  it(`Если игрок ответил на все вопросы медленно и у него осталось 0 жизней`, () => {
    const a = {
      userAnswers: tenSlowAnswers,
      livesLeft: 0,
    };

    assert.equal(500, resultCalc(a));
  });
});
