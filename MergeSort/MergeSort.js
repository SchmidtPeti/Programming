let counter = 1;
const merge = (left, right) => {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    console.log("arr contains: ",arr);
    console.log("this will after the array left: ",left);
    console.log("this will after the array and the left right: ",right);
    console.log(counter+".round merged array: ",arr.concat(left,right));
    console.log("--------------------");
    counter++;
    return arr.concat(left,right);
}
const mergeSort = (array) => {
    const half = Math.floor(array.length / 2);    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.slice(0, half);
    const right = array.slice(half);
    return merge(mergeSort(left),mergeSort(right))
}
export default mergeSort;
