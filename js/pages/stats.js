import headerAndFooterLayout from "../layout/headerAndFooterLayout";
import elementFromTemplate from "../utils/elementFromTemplate";
import progressBar from "../components/progressBar";
import resultCalc from "../data/resultCalc";
import * as S from "../selectors";

const lineFast = ({fastAmount, fastCost, fastScore}) => `
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${fastAmount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;${fastCost}</td>
    <td class="result__total">${fastScore}</td>
  </tr>
`;

const lineSlow = ({slowAmount, slowCost, slowScore}) => `
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${slowAmount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;${slowCost}</td>
    <td class="result__total">${slowScore}</td>
  </tr>
`;

const lineLives = ({livesAmount, livesCost, livesScore}) => `
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${livesAmount}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;${livesCost}</td>
    <td class="result__total">${livesScore}</td>
  </tr>
`;

const table = (result, index, state) => `
  <table class="result__table">

    <tr>
      <td class="result__number">${index}.</td>
      <td colspan="2">
        ${progressBar(state, result.history)}
      </td>
      <td class="result__points">×&nbsp;${result.correctCost}</td>
      <td class="result__total">${result.correctAmount}</td>
    </tr>

    ${result.fastAmount ? lineFast(result) : ``}
    ${result.slowAmount ? lineSlow(result) : ``}
    ${result.livesAmount ? lineLives(result) : ``}

    <tr>
      <td colspan="5" class="result__total  result__total--final">${result.totalScore}</td>
    </tr>
  </table>
`;

const render = (state) => {
  const stats = (data) => {
    const result = resultCalc({userAnswers: S.getAnswers(data), livesLeft: S.getLives(data)});
    data.results.push(result);
    data.results.push(result);
    data.results.push(result);

    return `
      <div class="result">
        <h1>Победа!</h1>

        ${data.results
      .map((item, idx) => {
        return table(item, idx + 1, data);
      })
      .join(``)}

        <table class="result__table">
          <tr>
            <td class="result__number">HARDCODE</td>
            <td>
              <ul class="stats">
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--correct"></li>
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--wrong"></li>
              </ul>
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>

      </div>
    `;
  };

  const markup = headerAndFooterLayout(elementFromTemplate(stats(state)), state);

  return markup;
};
export default render;
