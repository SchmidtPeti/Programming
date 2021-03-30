import Counting from "./Counting.js";
import MaxSearch from "./MaxSearch.js";
import Deciding from "./Deciding.js";
import Sum from "./Sum.js";

let arr = [2,3,4,5,6,7,8,99,100];

const even = (num) => {return num%2==0;}
const containsHundred = (num) => {return num===100;}

let sumOfArray = Sum(arr);
console.log("Sum of the whole array: ",sumOfArray)

let count = Counting(arr,even)
console.log("Count of even numbers: ",count);
let maxElem = MaxSearch(arr);
if(maxElem!==-1){
    console.log("Max elem of the array: ",maxElem);
}
let HunderIn = Deciding(arr,containsHundred);
if(HunderIn){
    console.log("This array contains at least one 100. ");
}