function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < arr.length - 1; i++) {
            if (arr[i] >  arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);;
}

// Big O Notation: O(n^2)

// Example usage:
const array1 = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array1);
console.log(array1); // [11, 12, 22, 25, 34, 64, 90]