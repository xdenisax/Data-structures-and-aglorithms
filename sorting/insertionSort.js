const numbers = [99, 44, 6, 2, 1, 5, 63, 97,283, 4, 0];

const insertionSort = (array) => {
    for ( let i = 0; i < array.length; i++ ) {
        //array[i] is smaller than any other value encountered until i
        if(array[i] < array[0]) {
            array.unshift(array.splice(i,1)[0]);
            //array.splice[i,1][0] remove de value from the index i and store it into an array of length 1
            //array.unshift inserts the value at the begging of the array
        } else { 
            //array[i] is not the smallest value compared to all the other values encountered
            //need to find its place between the values sorted until now
            for( let j = 1 ; j < i; j++ ) {
                if( array[i] < array[j] && array[i] > array[j-1]) {
                    array.splice(j, 0, array.splice(i,1)[0]);
                }
            }
        }

    }
    return array;
}

insertionSort(numbers);