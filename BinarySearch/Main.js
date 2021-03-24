import BinarySearch from './BinarySearch.js';

let arr = [10,23,26,35,65,72,89,99];
let newElement = 1;
let index = BinarySearch(arr,newElement);
arr.splice(index,0,newElement);
console.log(arr);