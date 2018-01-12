import assert from 'assert';
import resultCalc from './resultCalc';

import { lessWhatTen, tenAnswers } from './resultCalc.mock';

describe(`Функция подсчёта очков при окончании игры`, () => {
  it(`Если игрок ответил меньше, чем на 10 вопросов, то игра считается не пройденной и функция должна вернуть -1`, () => {
    assert.equal(-1, resultCalc(lessWhatTen));
  });

  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него остались все жизни, то функция должна вернуть 1150 очков`, () => {
    assert.equal(1150, resultCalc(tenAnswers));
  });
});
