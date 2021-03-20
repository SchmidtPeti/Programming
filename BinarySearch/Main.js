import BinarySearch from './BinarySearch.js';

let arr = [1,23,26,35,65,72,89,99];
let newElement = 65;
let index = BinarySearch(arr,newElement);
arr.splice(index,0,90);
console.log(arr);