// task 1 :  Sort Even Numbers Only 
let arr = [7, 4, 9, 2, 6, 1, 10];
let evenNums = arr.filter(num => num % 2 === 0);
evenNums.sort((a, b) => a - b);
console.log(evenNums); // [2, 4, 6, 10]


// task 2 :  Sort Odd Numbers Only
let oddNums = arr.filter(num => num % 2 !== 0);
oddNums.sort((a, b) => a - b);
console.log(oddNums); // [1, 7, 9]

// TASK 2: Balanced Bracket Checker