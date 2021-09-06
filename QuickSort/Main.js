//import quickSort from './QuickSort.js';
import quickSort from './QuickSortSecond.js';

let array = [6,3,10,5,9,3,23,1,10];
console.log("Old array: ",array);
console.log("----------------");
quickSort(array,0,array.length-1,true);
console.log("new array: ",array);