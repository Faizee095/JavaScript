// JS is synchronous , blocking and single-threaded language.
//Timeout and Intervals
//setTimeout()
// function greet(name){
//     console.log(name)
// }

// setTimeout(greet , 2000 , 'mona');

//------------------------------------------------------------------------
//setInetrval()
// function greet(name){
//     console.log(name)
// }

// setInterval(greet , 2000 , 'mona');//to stop it we use clearInterval()
//-----------------------------------------------------------------------
//Callbacks
//Examples
// function greet(name){
//     console.log(name)
// }

// setTimeout(greet , 2000 , 'mona');
//-----------------------------------------------------------------------
//Promises
// function sumOfThreeElements(...elements) {
//   return new Promise((resolve, reject) => {
//     if (elements.length > 3) {
//       reject("No of elemets is more than 3");
//     } else {
//       const sum = elements.reduce(
//         (accumulator, currentValue) => accumulator + currentValue
//       );
//       resolve("sum is: "+sum);
//     }
//   });
// }
// sumOfThreeElements(4, 5, 6)
// .then(result=> console.log(result))
// .catch(error=> console.log(error));

//----------------------------------------------------------------------
// async and await
//----------------------------------------------------------------------
//Event Loop
//a)Memory Heap b)Call Stack c)Web APIs d)Micro task Queue e)Callback Queue/ Task Queue


