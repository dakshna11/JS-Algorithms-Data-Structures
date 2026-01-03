function fibonacci(n) {
    let fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}
// Big O Notation: O(n)

function fibonacciRecursive(n) {
    if(n < 2) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// Big O Notation: O(2^n)

console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

