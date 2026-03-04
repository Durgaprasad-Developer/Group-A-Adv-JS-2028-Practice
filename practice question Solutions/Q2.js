const timer = {
  name: "Timer",
  start: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 10000);
  }
};

timer.start();