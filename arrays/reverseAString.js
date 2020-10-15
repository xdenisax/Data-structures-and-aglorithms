let stringToBeReversed = "Denisa invata SDA";

function reverseString(stringToBeReversed) {
    if(!stringToBeReversed || stringToBeReversed.length <= 0 || typeof stringToBeReversed !== 'string') {
        throw Error ("Invalid input")
    }
    console.log("Before: ", stringToBeReversed);
    //tranform string to array -> for loop - O(n)
    let array = transformStringToArray(stringToBeReversed); 

    //loop half of the array and interchange last value with first -> O(n)
    for( let i = 0; i < stringToBeReversed.length / 2; i++) {
        let aux = array[i];
        array[i] = array[stringToBeReversed.length -i-1];
        array[stringToBeReversed.length -i-1] = aux;
    }
    
    //transform array back to string 
    return transformArrayToString(array); 
}

function transformStringToArray(stringToBeTransformed) { 
    let array = [];
    for (let i = 0; i < stringToBeTransformed.length; i++) {
        array[i] = stringToBeTransformed.charAt(i);
    }
    return array;
}

function transformArrayToString(arrayToBeTransformed) { 
    let string = '';
    for (let i = 0; i < arrayToBeTransformed.length; i++) {
        string+=arrayToBeTransformed[i];
    }
    return string;
}

console.log(reverseString(stringToBeReversed));