// Task 1
function filterArray(myArray) {
    const evenNumber = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 === 0) {
            evenNumber.push(myArray[i]);
        }
    }
    return evenNumber;
}

const arrayNumber = [2, 3, 4, 5, 22, 5, 7, 80];
console.log(filterArray(arrayNumber));

