function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex] ) {
            return middleIndex; // Return the index if found
        } else if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1; // Search in the left half
        } else {
            leftIndex = middleIndex + 1; // Search in the right half
        }
    }
    return -1; // Return -1 if not found
}

// Big O Notation: O(log n)

console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // -1
console.log(binarySearch(['a', 'b', 'c', 'd'], 'c')); // 2
console.log(binarySearch(['apple', 'banana', 'cherry'], 'banana')); // 1
console.log(binarySearch([], 1)); // -1