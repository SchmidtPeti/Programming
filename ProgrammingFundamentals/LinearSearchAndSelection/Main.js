import { LinearSearch, selection } from "./LinearSearchAndSelection.js";

const ImTwo = (element) => {
    let imTwo = false;
    if(element===2){
        return !imTwo;
    }
    else{
        return imTwo;
    }
}
let arr = [3,4,1,3]
console.log(LinearSearch(arr,ImTwo));
console.log(selection(arr,ImTwo));