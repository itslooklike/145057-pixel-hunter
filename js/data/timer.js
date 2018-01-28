const timer = (time, callback) => ({
  time,
  tick() {
    if (this.time > 0) {
      --this.time;
    } else {
      setTimeout(() => {
        callback();
      }, 0);
    }

    return this.time;
  },
});

export default timer;
