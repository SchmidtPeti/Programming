//import quickSort from './QuickSort.js';
import quickSort from './QuickSortSecond.js';

let array = [6,3,4,11,2,5,9,8,1];
console.log("Old array: ",array);
console.log("----------------");
quickSort(array,0,array.length-1,true);
console.log("new array: ",array);