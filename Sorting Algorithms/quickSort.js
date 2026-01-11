function quickSort(arr){
    if(arr.lrngth < 2){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for (let i=0; i < arr.length - 1; i++){
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Big O Notation: O(n log n) on average, O(n^2) in the worst case

// Example usage:
const array3 = [10, 7, 8, 9, 1, 5];
const sortedArray = quickSort(array3);
console.log(sortedArray); // [1, 5, 7, 8, 9, 10]