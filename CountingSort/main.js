import CountingSort from "./countingSort.js";

var array = ["13", "02", "22", "11", "20", "31", "00"];
let arr = CountingSort(array,4,2);
console.log(arr);
arr = CountingSort(arr,4,1);
console.log(arr);