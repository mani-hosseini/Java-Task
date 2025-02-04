// // Task 1
// function filterArray(myArray) {
//     const evenNumber = [];
//     for (let i = 0; i < myArray.length; i++) {
//         if (myArray[i] % 2 === 0) {
//             evenNumber.push(myArray[i]);
//         }
//     }
//     return evenNumber;
// }
//
// const arrayNumber = [2, 3, 4, 5, 22, 5, 7, 80];
// console.log(filterArray(arrayNumber));
//
//
// // Task 2
// function cleanArray(mainArray) {
//     return mainArray.flat(Infinity)
// }
//
// const array = [1, 2, [3, 4], [5, [6]], 7]
// console.log(cleanArray(array));


// // Task 3
// async function getDate() {
//     const span = document.getElementById('span');
//     try {
//         span.innerText = "loading....";
//         const url = 'https://api.chucknorris.io/jokes/random';
//         const api = await fetch(url, {
//             method: 'GET',
//         });
//
//         const data = await api.json();
//         span.innerText = data.value;
//
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// document.getElementById('btn').addEventListener('click', getDate);

// // Task 4
// function sortArray(array) {
//     array.sort((num1, num2) => num1 - num2);
//     console.log(array);
// }
//
// const numberArray = [40, 100, 1, 5, 25, 10];
// sortArray(numberArray);


// // Task 5
// function counterObj(obj) {
//     let count = 0;
//
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             count += counterObj(obj[key]);
//         } else {
//             count++;
//         }
//     }
//
//     return count;
// }
//
// const userObject = {
//     name: 'mani',
//     family: 'Mani',
//     email: 'mani@gmail.com',
//     phone: {
//         telephone: '0123456789',
//         phoneNumber: '0123456789'
//     },
//     address: 'iran'
// };
//
// console.log(counterObj(userObject));


// // Task 6
//  const changeBtn = document.getElementById("change");
//
//  changeBtn.addEventListener("click", () => {
//      document.body.style.backgroundColor = "white";
//  });


// // Task 7
// const timerEl = document.getElementById('timer');
// let timer = 3;
// timerEl.innerText = timer;
// let intervalId = setInterval(() => {
//     timer--;
//     if (timer === 0) {
//         clearInterval(intervalId);
//     }
//     timerEl.innerText = timer;
// }, 1000);


// Task 8
// function creatEl(el) {
//     const bodyEl = document.body;
//     const div = document.createElement("div");
//     div.classList.add("card");
//     const tittle = document.createElement("h2");
//     tittle.classList.add("card-tittle");
//     tittle.innerText = "tittle of this cart";
//     const content = document.createElement("p");
//     content.classList.add("card-content");
//     content.innerText = "content of this cart";
//     const button = document.createElement("button");
//     button.setAttribute("id", "delete-btn");
//     button.innerText = "button of this cart";
//
//     bodyEl.appendChild(div);
//     div.appendChild(tittle);
//     div.appendChild(content);
//     div.appendChild(button);
// }
//
// creatEl();


// // Task 9
// function isValidEmail(email) {
//     const adStr = email.split('@');
//     if (adStr.length !== 2) {
//         return false;
//     }
//     const localPart = adStr[0];
//     const domainPart = adStr[1];
//     if (localPart.length === 0 || domainPart.length === 0) return false;
//     const dotStr = domainPart.split('.');
//     if (dotStr.length < 2) {
//         return false;
//     }
//     return true;
// }
//
// console.log(isValidEmail("mani@gmail.com"));


// // Task 10
// function transformFunc(arr) {
//     return arr.map(str => ({length: str.length, name: str}));
// }
//
// const strings = ["mani", "kasra"];
// const result = transformFunc(strings);
//
// console.log(result);
