import quickSort from './QuickSort.js';

let array = [9, 7, 5, 11, 12, 2,14, 3,10,6];
console.log(array);
quickSort(array,0,array.length-1);
console.log("new array: ",array);