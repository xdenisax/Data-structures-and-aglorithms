//Google Question
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,

array = [2,5,1,2,3,5,1,2,4];
function firstRecurringCharacter(input) {
    if(!input || input.length <= 0 ) {
        throw Error("Invalid input.");
    }
    let recurringChar = {};
    for( let i = 0; i < input.length; i++) {
        if(!recurringChar[input[i]]) {
            recurringChar[input[i]] = true;
        }else {
            return input[i];
        }
    }
    return undefined;
}

firstRecurringCharacter(array);
