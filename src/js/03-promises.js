import Notiflix from 'notiflix';

const refs = { 
  form: document.querySelector('.form'),
   delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
  submitBtn: document.querySelector('[type=submit]')
     
}

// console.log(refs.submitBtn);

const promise = new Promise((resolve, reject) => { 
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => { 
    
  if (shouldResolve) {
    resolve(`✅ Fulfilled`)
    
  }
  reject (`❌ Rejected`)
  }, 1500)
})

console.log(promise);

promise.then(result => {
  console.log(result);
}, error => {
  console.log(error)
},
);

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

