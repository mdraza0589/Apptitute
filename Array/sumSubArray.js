function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

let input = [5, 2, -4, -5, 3, -1, 2, 3, 1];
console.log(maxSubarraySum(input));  
