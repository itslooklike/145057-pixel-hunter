const timer = ({time, callback}) => ({
  time,
  tick() {
    if (this.time > 0) {
      this.time--;
      // console.log(`tick!`);
    } else {
      callback();
      // console.log(`it callback from timer`);
    }
  },
});

export default timer;
