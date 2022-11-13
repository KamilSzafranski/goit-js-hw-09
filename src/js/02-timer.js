import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timer = document.querySelector('div.timer');
const btnStart = document.querySelector('button[data-start]');
const timerChild = [...timer.children];
const input = document.querySelector('input#datetime-picker');
let firstSelectedDate = 0;
const presentDate = new Date().getTime();
let interval = null;

const stopCount = buttonDisabled => {
  btnStart.disabled = buttonDisabled;
  clearInterval(interval);
  timerChild.forEach(element => {
    element.firstElementChild.textContent = '00';
  });
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    firstSelectedDate = selectedDates[0].getTime();
    if (firstSelectedDate < presentDate) {
      stopCount(true);
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    stopCount(false);
    return firstSelectedDate;
  },
};

const interfaceUpgrade = () => {
  btnStart.style.marginBottom = '1rem';
  btnStart.disabled = true;
  timer.style.display = 'flex';
  timer.style.gap = '2rem';

  timerChild.forEach(element => {
    element.style.textAlign = 'center';

    element.firstElementChild.style.display = 'block';
    element.firstElementChild.style.fontSize = '28px';

    element.lastElementChild.style.fontSize = '24px';
  });
};

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const addLeadingZero = value => value.toString().padStart(2, '0');

const counter = () => {
  const nowDate = new Date().getTime();
  const time = firstSelectedDate - nowDate;
  if (time < 0) return;
  const convertedTime = convertMs(time);
  const convertedTimeValue = Object.values(convertedTime);
  timerChild.forEach((element, index) => {
    element.firstElementChild.textContent = addLeadingZero(
      convertedTimeValue[index]
    );
  });
};

const counterAndPrint = (call, delay) => {
  return () => {
    btnStart.disabled = true;
    call();
    interval = setInterval(call, delay);
  };
};

interfaceUpgrade();
flatpickr(input, options);
btnStart.addEventListener('click', counterAndPrint(counter, 1000));
