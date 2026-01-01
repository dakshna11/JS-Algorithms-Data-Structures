function factorial(n) {
    let result = 1;
    for(let i=2; i<=n; i++){
        result = result * i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(10)); // 3628800

// Big O Notation: O(n)