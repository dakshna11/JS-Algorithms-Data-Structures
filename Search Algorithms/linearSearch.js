function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

// Big O Notation: O(n)

console.log(linearSearch([4, 2, 3, 5, 1], 5)); // 3
console.log(linearSearch([10, 20, 30, 40, 50], 25)); // -1
console.log(linearSearch(['a', 'b', 'c', 'd'], 'c')); // 2
console.log(linearSearch(['apple', 'banana', 'cherry'], 'banana')); // 1
console.log(linearSearch([], 1)); // -1