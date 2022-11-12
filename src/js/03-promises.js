import Notiflix from 'notiflix';

const amount = document.querySelector('input[name=amount]');
const step = document.querySelector('input[name=step]');
const delay = document.querySelector('input[name=delay]');
const form = document.querySelector('form.form');

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return somePromise;
};

const startCreatingPromises = event => {
  event.preventDefault();
  const amountValue = Number(amount.value);
  let stepValue = Number(step.value);
  let delayValue = Number(delay.value);

  for (let i = 0; i < amountValue; i++) {
    let numberOfPromises = i + 1;

    createPromise(numberOfPromises, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delayValue += stepValue;
  }
};

form.addEventListener('submit', startCreatingPromises);
