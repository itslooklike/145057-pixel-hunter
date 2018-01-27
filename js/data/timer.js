const timer = (time, callback) => ({
  time,
  tick() {
    if (this.time >= 0) {
      console.log(`tick!`);
      return this.time--;
    } else {
      callback();
      console.log(`it callback from timer`);
    }
  },
});

export default timer;
