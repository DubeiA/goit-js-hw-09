const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body')

let timerId = null;



startBtn.addEventListener('click', () => {

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  }, 1000);

  startBtn.setAttribute("disabled", "");
  
});


stopBtn.addEventListener('click', () => {
  body.style.backgroundColor = "";
  
  clearInterval(timerId);
 
   startBtn.removeAttribute("disabled");
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


