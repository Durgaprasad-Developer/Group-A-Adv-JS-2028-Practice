function createFibo() {
    let cache = {1:0, 2:1};
    return function fib(n){

        if(n in cache) return cache[n];

        cache[n] = fib(n-1) + fib(n-2);

        return cache[n];
    }
}

let fib = createFibo();
console.log(fib(3));
console.log(fib(6));
console.log(fib(65));
console.log(fib(6));