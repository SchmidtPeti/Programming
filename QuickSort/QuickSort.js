const partition = (arr,start,end) =>{
   const pivotValue = arr[end];
   let pivotIndex = start; 
   for (let i = start; i < end; i++) {
       if (arr[i] < pivotValue) {
       let tmp = arr[i];
       arr[i]=arr[pivotIndex];
       arr[pivotIndex] = tmp;
       //[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
       pivotIndex++;
       }
   }
   
   let tmp = arr[pivotIndex];
   arr[pivotIndex] = arr[end];
   arr[end] = tmp;
   //console.log("before this element there are only lesser elements but not in ordered: "+arr[pivotIndex],arr)
   console.log("this was index",pivotIndex);
   console.log("start: "+start+" end: "+end);
   console.log("New array: ",arr);
  // [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
   return pivotIndex;
}
let logged = false;
const quickSort = (arr,start,end) => {
    if (start >= end) {
        console.log("this is where the stack ends: ","start = "+start+", end = "+end);
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end); //4
    
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
export default quickSort;