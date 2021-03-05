const numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];

// 1. Using the array above create a function that loops through the array and returns a new array with all the numbers multiplied by 10.
function arrTimes10(numArray) {
    const value = []
    for (let i = 0; i < numArray.length; i++) {
        value[i] = numArray[i] * 10
    }
    console.log(value)
    return value
}
arrTimes10(numArray)
// 2. Using the array above create a function that returns the sum of all numbers within.

function arrSum(numArray) {
    let sum = 0
    for (let i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i]
    }
    console.log(sum)
    return sum;
}
arrSum(numArray)
/* 
3. Create a function that accepts an array and a search value. This function will return true if the search value is an element in the array. Otherwise, it will return false. Don't use any built in array methods to do this. Ie: 
doesItInclude([23, 24, "kale"], "kale")  -> should return true
*/
console.log(searchFunction([23, 24, "kale"], "kale"))
function searchFunction(array, searchValue) {
    for (let i = 0; i < array.length; i++) {
        if (searchValue == array[i]) {
            return true
        }
    }
}


// 4. Create a function that accepts an array. This function will return a new array with the elements in reverse order.
function reverseArr(array) {
    let flipper = []
    let jlipper = 0
    for (let i = array.length; i > 0; i--) {
        flipper[i] = array[jlipper++]
    }
    flipper.shift()
    console.log(flipper)
    return flipper
}
reverseArr(numArray)
// 5. Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total.

function sumNotDiv(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0){
        sum = sum + array[i]
        }
    }
    return sum
}
console.log(sumNotDiv(numArray))
// Use the following array for the questions below (you might need to find examples of "nested loops" using good ol' google):

const nestedArr = ['full', 'stack', ['node', 'react'], [], ['redux'], ['html', 'css'], 'sql'];

// 6. Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.

// 7. Create a function that logs every word that has a length of 4 in the array and in the nested arrays. Return "Done!" at the end.

// 8. Create a function that logs every word that has the letter 'a' in the word in the array and nested arrays.