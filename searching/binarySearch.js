let numbers = [99, 44, 6, 2, 1, 5, 63, 97,283, 4, 0];

const binarySearch = (array, value) => {
    if(array.length <=0 ) {
        throw Error("Array has no values");
    }

    if(!value || typeof(array[0]) !== typeof(value))  {
        throw Error("Search value has not the same type as array values.")
    }
    array = array.sort( (a,b) => {return a-b});
    console.log(array)

    let minIndex = 0; 
    let maxIndex = array.length - 1;
    
    while (minIndex < maxIndex) {
        let mid = Math.floor((maxIndex - minIndex)/2);
        console.log(mid)
        if( value === array[mid] ) {
            return mid + 1;
        } else if( value > array[mid] ) {
            minIndex = mid + 1;
        } else if( value < array[mid] ){
            maxIndex = mid - 1;
        }
    }
    return -1;
}

binarySearch(numbers, 283);