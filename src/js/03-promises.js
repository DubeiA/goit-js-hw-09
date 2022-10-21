// import Notiflix from 'notiflix';

const refs = { 
  form: document.querySelector('.form'),
   delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
  submitBtn: document.querySelector('[type=submit]')
     
}


refs.form.addEventListener('submit' , function (event) {
  event.preventDefault();

  let {delay, step, amount} = getValue()

  console.log( { delay, step, amount });

  return 
})

function getValue() {
  return { 
    delay: refs.delay.value,
    step: refs.step.value,
    amount: refs.amount.value
 }
}



  // ======================================
  // Проміси

  // const promise = new Promise((resolve, reject) => { 
  //   const shouldResolve = Math.random() > 0.3;
  //   setTimeout(() => { 
    
  //   if (shouldResolve) {
  //     resolve(`Fulfilled`)
    
  //   }
  //   reject (`Rejected`)
  //   }, 1500)
  // })

  // console.log(promise);

  // promise.then(onFulldield, onReject);


  // function onFulldield(result) {
  //   console.log(`✅ ${result}`);
  // }

  // function onReject(error) {
  //   console.log(`❌ ${error}`);
  // }






  // ============================================
  // рахувалка



  let repeatCount = 0;
  const MAX_REPEAT_COUNT = refs.amount.value;


  // const repeatPromise = setInterval(() => {
  //   if (repeatCount === MAX_REPEAT_COUNT) {
  //     console.log(`done 3 times`);
  //     clearInterval(repeatPromise)
  //     return
  //   }


  //     console.log('Start');
  //     repeatCount += 1;
  //   }, 1000)



  if (repeatCount === MAX_REPEAT_COUNT) {
    console.log(`done 4 times`);
    return
  }

  setTimeout(() => {
    console.log('Start');
    repeatCount += 1;
  }, 1000)



  // ======================================================== 
  // Матеріал для завдання

  // function createPromise(position, delay) {
  //   const shouldResolve = Math.random() > 0.3;
  //   if (shouldResolve) {
  //     // Fulfill
  //   } else {
  //     // Reject
  //   }
  // }

  // createPromise(2, 1500)
  //   .then(({ position, delay }) => {
  //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   })
  //   .catch(({ position, delay }) => {
  //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  //   });

