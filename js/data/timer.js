const timer = (time, callback) => ({
  time,
  tick() {
    if (this.time > 0) {
      console.log(`tick!`, this.time);
      return --this.time;
    } else {
      callback();
    }

    return this.time;
  },
});

export default timer;
