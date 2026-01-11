function cartesianProduct(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}

// Big O Notation: O(n * m) where n and m are the lengths of arr1 and arr2 respectively

// Example usage:
const arrayA = [1, 2];
const arrayB = ['a', 'b'];
console.log(cartesianProduct(arrayA, arrayB)); 
// Output: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]