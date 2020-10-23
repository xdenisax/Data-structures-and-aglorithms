
function findFactorialRecursive(number) {
    if(number === 1) {
        return number;
    }

    return number*findFactorialRecursive(number-1);
}
  
function findFactorialIterative(number) {
    let answer = number; 
    number--;
    while (number > 0 ){
        answer*=number;
        number--;
    }
    return answer;
}
  