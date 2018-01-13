const headerLives = (state) => {
  const html = (data) => `
    <div class="game__lives">
      ${new Array(data.lives)
      .fill(
          `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`
      )
      .join(``)}
      ${new Array(data.maxLives - data.lives)
      .fill(
          `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`
      )
      .join(``)}
    </div>
  `;

  const markup = html(state);

  return markup;
};

export default headerLives;
