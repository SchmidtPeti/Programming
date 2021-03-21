const swap = (arr,i,j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
const partition = (arr,start,end,startWithStart) => {
    let i = 0;
    if(startWithStart){
        i = start;
    }
    else{
        i = end;
    }
    console.log("Pivot: ",arr[i]);
    let x = arr[i];
    arr[i] = arr[end];
    i=start;
    while(i<end&&arr[i]<=x){
        i=i+1;
    }
    if(i<end){
        let j = i+1;
        while(j<end){
            if(arr[j]<x){
                swap(arr,i,j);
                i+=1;
            }
            j++;
        }
        arr[end] = arr[i];
        arr[i] = x;
    }
    else{
        arr[end]=x;
    }
    console.log(counter+". round start: "+start+" end: "+end,arr);
    console.log("---------");
    counter++;
    return i;
}
let counter = 1;
const quickSort = (arr,start,end,startWithStart) => {
    if(start<end){
    let q = partition(arr,start,end,startWithStart);
    quickSort(arr,start,q-1,startWithStart);
    quickSort(arr,q+1,end,startWithStart);
    }
}
export default quickSort;