function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numberToInsert;
    }
}

// Big O Notation: O(n^2)

// Example usage:
const array2 = [12, 11, 13, 5, 6];
insertionSort(array2);
console.log(array2); // [5, 6, 11, 12, 13]