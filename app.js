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


// // Task 6
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


// Task 6
const changeBtn = document.getElementById("change");

changeBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
});
