import CopyArray from './CopyArray.js';
import SelectElements from "./SelectElements.js";
import Assortment from "./Assortment.js";
import Engraving from "./Engraving.js";
import Union from "./Union.js";

let arr = [1,2,3,4,5,6,7,8,9,10];
let arrTwo = [1,2,3,4,10,11,12,13,14];

const even = (num) => {return num%2==0;}
const transformToEvenString = (num) => {return "even";}

let newArray = CopyArray(arr,even,transformToEvenString);
console.log("the elements are the same except the ones which return true from the (true/false) function");
console.log("New array: ",newArray);

newArray = SelectElements(arr,even);
console.log("Even selected array: ",newArray);

let {trueArray,falseArray} = Assortment(arr,even);
console.log("Even array: ",trueArray);
console.log("Odd array: ",falseArray);

let array = Engraving(arr,arrTwo);
console.log("Elments which are in both arrays: ",array);

array = Union(arr,arrTwo);
console.log("Untion array: ",array);