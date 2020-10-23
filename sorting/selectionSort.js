const numbers = [99, 44, 6, 2, 1, 5, 63, 97,283, 4, 0];

const selectionSort = ( array ) => {
    for( let i = 0; i < array.length; i++ ) {
        let smallestItemIndex = i;
        for( let j = i+1; j < array.length; j++ ) {
            if( array[smallestItemIndex] > array[j] ){
                smallestItemIndex = j;
            }
        }
        let aux = array[smallestItemIndex]; 
        array[smallestItemIndex] = array[i];
        array[i] = aux;
    }
    return array;
}

selectionSort(numbers);