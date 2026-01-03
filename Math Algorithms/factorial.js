function factorial(n) {
    let result = 1;
    for(let i=2; i<=n; i++){
        result = result * i;
    }
    return result;
}
// Big O Notation: O(n)

function factorialRecursive(n) {
    if(n === 0) return 1;
    return n * factorialRecursive(n - 1);
}
// Big O Notation: O(n)

console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(10)); // 3628800
