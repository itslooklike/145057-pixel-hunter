import {progressBarTen} from "./resultCalc.mock";
import * as C from "../constants";

export const urlMocks = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
  ],
};

const state = {
  lives: 3,
  maxLives: C.MAX_LIVES,
  rounds: C.GAME_ROUNDS,
  fastAnswerTime: C.GAME_ANSWER_FAST_TIME,
  fastAnswerCost: C.GAME_ANSWER_FAST_COST,
  slowAnswerTime: C.GAME_ANSWER_SLOW_TIME,
  slowAnswerCost: C.GAME_ANSWER_SLOW_COST,
  correctAnswerCost: C.GAME_ANSWER_CORRECT_COST,
  game1: {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    urls: [urlMocks.paintings[0], urlMocks.photos[0]],
  },
  game2: {
    title: `Угадай, фото или рисунок?`,
    urls: [urlMocks.paintings[1]],
  },
  game3: {
    title: `Найдите рисунок среди изображений`,
    urls: [urlMocks.paintings[2], urlMocks.photos[1], urlMocks.paintings[1]],
  },
  currentGameAnswers: progressBarTen,
  results: [],
};

export default state;
