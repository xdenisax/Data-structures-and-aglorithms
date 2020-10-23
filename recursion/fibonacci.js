
function fibonacciIterative(n){
    let prev = 1;
    let prevprev = 0;
    let answer;
    let counter = 2;

    if( n===1 ) {
        return 0;
    }

    if( n===2 ) {
        return 1;
    }

    while( counter <= n ) {
        answer = prevprev + prev;
        prevprev = prev;
        prev=answer;
        counter++; 
    }

    return answer;
}
fibonacciIterative(3);
  
function fibonacciRecursive(n) {
    if( n < 2 ) {
        return n;
    }
    return  fibonacciRecursive(n-2) + fibonacciRecursive(n-1);
}
fibonacciRecursive(3);

function memoizedFibonacci() {
    let cache = {};
    return function fibonacciRecursive(n) {
        if( n in cache ) {
            return cache[n];
        } else {
            if( n < 2 ) {
                return n;
            } else {
                cache[n] = fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
            }
            return cache[n];
        }
    }
}
let memoizedFib = memoizedFibonacci();
memoizedFib(3);


  