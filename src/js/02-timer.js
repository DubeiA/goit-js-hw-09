
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const options = {
    enableTime: true,           //   вибір часу (години) 
    time_24hr: true,            //   відображення часу в форматі 24
    defaultDate: new Date(),    //   дата за замовчуванням
    minuteIncrement: 1,         //   інтервал 
  
  onClose(selectedDates) {
      console.log(selectedDates[0]);

      if (selectedDates[0] >= options.defaultDate) {
          refs.startBtn.removeAttribute("disabled");
          return
      }
      window.alert("Please choose a date in the future")
      refs.startBtn.setAttribute("disabled", "");
  },
  
};



flatpickr("#datetime-picker", options);



refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    field: document.querySelector('.field'),
    value: document.querySelector('.value'),
    label: document.querySelector('.label'),

}

// const timePicker = 


refs.startBtn.addEventListener("click" , () => { })


// // console.log(refs.input);

// function isDateCorrect() {
//     console.log(selectedDates);
// }

