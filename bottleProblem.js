function numWaterBottles(numBottles, numExchange) {
    let total = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        let newBottles = Math.floor(empty / numExchange);
        total += newBottles;
        empty = (empty % numExchange) + newBottles;
    }

    return total;
}

// Example test cases
console.log(numWaterBottles(9, 3));   // 13
console.log(numWaterBottles(15, 4));  // 19
console.log(numWaterBottles(5, 5));   // 6
console.log(numWaterBottles(2, 3));   // 2
