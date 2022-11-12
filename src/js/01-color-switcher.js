const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let intervalId = null;

const startChangeColour = event => {
  const bgColour = getRandomHexColor();
  document.body.style.backgroundColor = bgColour;
  intervalId = setInterval(() => {
    let color = getRandomHexColor();
    while (color === bgColour) {
      console.log('Color Repeated!!!!');
      color = getRandomHexColor();
    }
    document.body.style.backgroundColor = color;
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
};

const stopChangeColour = event => {
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
};

btnStart.addEventListener('click', startChangeColour);
btnStop.addEventListener('click', stopChangeColour);
