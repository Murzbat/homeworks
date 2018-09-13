function timer() {
  //Timer
  let deadline = '2019-07-04';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    seconds = checkTime(seconds);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    days = checkTime(days);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    updateClock();
    var timeInterval = setInterval(updateClock, 1000);
  }

  setClock('timer', deadline);

  function checkTime(a) {
    if (a < 10 && a > 0) {
      a = "0" + a;
    } else if (a <= 0) {
      a = '00';
    }

    return a;
  }
}

module.exports = timer;