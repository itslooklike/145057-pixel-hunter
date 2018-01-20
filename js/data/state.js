import * as C from "../constants";

export const urlMocks = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
    `http://www.reading.com.ua/wp-content/uploads/2015/02/portrety-devushek-750x644.jpg`,
    `http://foto.fastimagess.ru/img-q5y5x5n4g4041456w4t4q2q5u5f5d4c4s404h4e4p4s4g58406a4p4q2o4u4/2014/06/kak_narisovat_orhideu_cvetnymi_karandashami36.jpg`,
    `https://w-dog.ru/wallpapers/15/3/437850330584583/lev-cvetnoj-vzglyad.jpg`,
    `http://boombob.ru/img/picture/Oct/12/b8be558f2365931a3c8100097dfe7e30/7.jpg`,
    `http://www.krasfun.ru/images/2014/9/68357_3d-pencil-drawings-024.jpg`,
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
    `https://million-wallpapers.ru/wallpapers/1/50/small/339646622751917.jpg`,
    `https://dncache-mauganscorp.netdna-ssl.com/thumbseg/2201/2201971-bigthumbnail.jpg`,
    `http://ticketforplane.ru/sites/default/files/styles/350pxteaser/public/field/image/new-york.jpg?itok=yI93WXkN`,
    `http://i0.wallpaperscraft.ru/image/gonkong_gorod_noch_peyzazh_725_300x175.jpg`,
    `https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1654/1654645-bigthumbnail.jpg`,
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
  screens: {
    intro: {
      name: `intro`,
      nextScreen: `greeting`,
    },
    greeting: {
      name: `greeting`,
      nextScreen: `rules`,
    },
    rules: {
      name: `rules`,
      nextScreen: `game`,
    },
    game: {
      name: `game`,
      nextScreen: `stats`,
    },
    stats: {
      name: `stats`,
      nextScreen: `intro`,
    },
  },
  gamesList: {
    game1: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
    },
    game2: {
      title: `Угадай, фото или рисунок?`,
    },
    game3: {
      title: `Найдите рисунок среди изображений`,
    },
  },
  currentScreen: ``,
  currentGameLevel: ``,
  currentRound: 0,
  currentGameAnswers: [],
  results: [],
  TMP_URLS: urlMocks,
};

export default state;
