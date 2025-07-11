// Task 1: Print 1 to 10 using three loops (for, while, for-of) 
// for loop
for(let i = 1; i<= 10 ; i++){
    console.log(i);
}

// while loop 
let i = 1;
while(i<= 10){
    console.log(i);
    i++
}

// for of 
let num = [1,2,3,4,5,6,7,8,9,10];
for(let nums of num){
    console.log(nums);
}

// --------------------------------------------------------------------------

// Task 2: Check even or odd using if-else 
let number = prompt("enter your number : ")
console.log("number is : ", number);


if(number % 2 == 0  ){
    console.log("number is even");
}else{
    console.log("number is odd");
}

// --------------------------------------------------------------------------

// Task 3: Print array of 5 strings in reverse order

let arr =[1,2,3,4,5];
console.log("print arr : ", arr);
console.log(arr.reverse());

// ---------------------------------------------------------------------------

// Task 4: Reverse Array Without Extra Array (In-place)

//  //1st approch 
// function reverseArrayInPlace(arr) {
//     let reverse = [];
//     for(let i = arr.length - 1 ; i >= 0 ; i--){
//         reverse.push(arr[i]);
//     }
//     console.log("reverse array : ", reverse);
// }

// // 2nd approch 
 function reverseArrayInPlace(arrays){
    let left =0;
    let right = arr.length -1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--
    }
    console.log("reverce in-place:", arr);
    
}

let arrays = [10, 20, 30, 40];
reverseArrayInPlace(arrays);

// -----------------------------------------------------------------------------

// Task 5 : FizzBuzz Problem (Classic Interview Question) 
// Question:
// Write a loop from 1 to 50. For each number:
// If divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both → print "FizzBuzz"
// Else → print the number

for(let i =1; i<=50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if (i%3 === 0) {
        console.log("Buzz");
    }else if ( i % 5 === 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}

// -----------------------------------------------------------------------

// Task 6 : 3 Sum of Even Numbers in Array

let numbers = [1, 2, 4, 7, 10]; 
let sum = 0 ;
for(let arrs of numbers){
    if(arrs % 2 === 0){
        sum = sum + arrs
        console.log(sum);
    }
}

// -----------------------------------------------------------------------

// Task 7 -> Frequency Counter-> Given an array of numbers, count how many times the number 3 appears.

// try new logic to solve it 
let array = [1, 3, 3, 5, 3, 6] 
let counts = array.length ;
for(let arrs of array){
    if(arrs !== 3){
        counts--
    }
}

console.log("count od 3 is :" ,count);

// normla logic 
let count = 0;
for (let num of arr) {
    if (num === 3) {
        count++;
    }
}

// -------------------------------------------------------------------

// Task 8 -> Palindrome Check -> Write a program that checks if a given string is a palindrome.

// using reverce()
let name = prompt("enter the string :")
console.log(name);

let reverce = name.split('').reverse().join('');
if(name === reverce){
    console.log("current string is Palindrome");
} else{
    console.log("not a palindrome");
    
}

// without using reverce()
let str = prompt("Enter a string:");
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
