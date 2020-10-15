// merge  [0, 3, 4, 31] with [4, 6, 30]

let first = [0, 3, 4, 31];
let second = [4, 6, 30];

function mergeSortedArrays(first, second) { 
    //check invalid inputs
    if(!first || !second 
    || !(first instanceof Array)
    || !(second instanceof Array)) {
        throw Error ("Invalid inputs");
    }

    //check if first is empty
    if( first.length <= 0 ) {
        return second;
    }

    //check if second is empty
    if( second.length <= 0 ) {
        return first;
    }

    //merge arrays
    let i = 0;
    let indexOfSecond = 0;
    let mergedArray= [];
    while (i < first.length) {
        if( indexOfSecond < second.length &&  
            first[i] > second[indexOfSecond]) {
            mergedArray.push(second[indexOfSecond]);
            indexOfSecond++;
        } else {
            mergedArray.push(first[i]);
            i++;
        }
    }

    while( indexOfSecond < second.length) { 
        mergedArray.push(second[indexOfSecond]);
        indexOfSecond++;
    }

    return mergedArray;
}

console.log(mergeSortedArrays(first, second));