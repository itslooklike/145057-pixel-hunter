import assert from "assert";
import timer from "./timer";

describe(`Таймер`, () => {
  it(`сделать два тика`, (done) => {
    let interval;

    const config = {
      time: 2,
      callback() {
        clearInterval(interval);
        assert.equal(0, 0);
        done();
      },
    };

    const testTimer = timer(config);

    interval = setInterval(testTimer.tick, 200);
  });
});
