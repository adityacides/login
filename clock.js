document.addEventListener("DOMContentLoaded", function () {
    // Update the clock every second
    setInterval(updateClock, 1000);
  
    // Initial clock update
    updateClock();
  });
  
  function updateClock() {
    const now = new Date();
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());
  
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  function formatTimeUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }
  