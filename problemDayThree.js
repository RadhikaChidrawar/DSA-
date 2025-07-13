// // Sort this array in descending order using any loop:

let arr = [9, 1, 5, 3, 8, 2];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Descending Order Array:", arr);
