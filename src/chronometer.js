class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
  }
  

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    if (typeof printTimeCallback === "function") {
      printTimeCallback();
    }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let currentTime = Math.round(Math.floor(this.currentTime / 60));
    return currentTime 
  }

  getSeconds() {
    let currentTime = this.currentTime % 60;
    return currentTime;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if (value.length === 2) {
      return value;
    } else if (value.length === 1) {
      return "0" + value ;
    } else if (value.length === 3) {
      return value.split('  ')
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
  }
}
