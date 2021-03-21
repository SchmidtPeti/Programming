//import quickSort from './QuickSort.js';
import quickSort from './QuickSortSecond.js';

let array = [9, 7, 5, 11, 12, 2,14, 3,10,6];
console.log("Old array: ",array);
console.log("----------------");
quickSort(array,0,array.length-1,false);
console.log("new array: ",array);