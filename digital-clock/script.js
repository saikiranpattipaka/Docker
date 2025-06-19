let is24Hour = false;
let currentTimezone = 'local';

function updateClock() {
  const now = new Date();

  let options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !is24Hour,
    timeZone: currentTimezone === 'local' ? undefined : currentTimezone,
  };

  const timeString = now.toLocaleTimeString([], options);
  document.getElementById('clock').textContent = timeString;
}

document.getElementById('toggleFormat').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('toggleFormat').textContent = 
    is24Hour ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
  updateClock();
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

document.getElementById('timezone').addEventListener('change', (e) => {
  currentTimezone = e.target.value;
  updateClock();
});

setInterval(updateClock, 1000);
updateClock();
