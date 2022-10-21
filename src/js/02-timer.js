
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]')

}

let timerId = null;
let ms = 0;

// додавання атрибута , що б була не активна кнопка
refs.startBtn.setAttribute("disabled", "");

const options = {
    enableTime: true,           //   вибір часу (години) 
    time_24hr: true,            //   відображення часу в форматі 24
    defaultDate: new Date(),    //   дата за замовчуванням
    minuteIncrement: 1,         //   інтервал 
  
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    
      if (selectedDates[0] < options.defaultDate) {
          
           Notiflix.Notify.failure('Please choose a date in the future');
          return
      }
      refs.startBtn.removeAttribute("disabled");
      refs.startBtn.addEventListener('click', () => {
      Notiflix.Notify.success('Timer started');
      timerId = setInterval(() => {
        ms = selectedDates[0] - Date.now();
        const updateTimerObj = convertMs(ms);
        
        updateClockFace(updateTimerObj);

        //   очищення знайчення і зупинка таймера
        if (ms <= 1000) {
          clearInterval(timerId);
          Notiflix.Notify.success('Timer stoped');
        }
      }, 1000);
    });

  },
  
};


// підключення календаря + налаштування до нього
flatpickr(refs.input, options);


// має змінювати знайчення на таймері
function updateClockFace( { days, hours, minutes, seconds }) {
    refs.timerDays.textContent = `${days}`;
    refs.timerHours.textContent = ` ${ hours }`;
    refs.timerMinutes.textContent = `${ minutes }`;
    refs.timerSeconds.textContent = `${seconds}`;
}


// Додає 0 до чила 
function pad(value) {
    return String(value).padStart(2, '0');
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


// =========================================================



