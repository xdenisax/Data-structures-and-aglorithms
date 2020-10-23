const numbers = [99, 44, 6, 2, 1, 5, 63, 97,283, 4, 0];

const bubbleSort = (array) => {
    const length = array.length;
    
    for(let j=0; j<length; j++) {
        for(let i=0; i<length-1; i++) {
            if( array[i] > array[i+1] ) {
                let aux = array[i];
                array[i] = array[i+1];
                array[i+1] = aux;
            }
        }
    }

    return array;
}

bubbleSort(numbers);