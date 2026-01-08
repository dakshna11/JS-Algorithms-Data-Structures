function recurisiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
        return middleIndex;
    } else if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

// Big O Notation: O(log n)

console.log(recurisiveBinarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(recurisiveBinarySearch([10, 20, 30, 40, 50], 25)); // -1
console.log(recurisiveBinarySearch(['a', 'b', 'c', 'd'], 'c')); // 2
console.log(recurisiveBinarySearch(['apple', 'banana', 'cherry'], 'banana')); // 1
console.log(recurisiveBinarySearch([], 1)); // -1