const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let right = array.splice(array.length/2 % 2 === 0 ? array.length/2 -1 : array.length/2 );
  let left = array;
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
} 

function merge(left, right){
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while ( leftIndex < left.length  && rightIndex < right.length ) {
        if(left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }
    //if there are any values left in left or right, they are appended to the merged values.
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);