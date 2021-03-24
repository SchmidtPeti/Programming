let keyComparing = 0;
const swap = (arr,i,j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
const partition = (arr,start,end,startWithStart) => {
    keyComparing+=Math.abs(end-start);
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
                console.log("swap(arr,i,j)");
                console.log("i = ",i+" and data: "+arr[i]);
                console.log("j = ",i+" and data: "+arr[j]);
                console.log("--------------");
                swap(arr,i,j);
                i+=1;
            }
            j++;
        }
        console.log("arr[end] = arr[i], arr[i] = x")
        console.log("'end'/'start' index: ",end+" element: "+arr[end]);
        console.log("i index: "+i+" element: "+arr[i]);
        console.log("x value: "+x);
        console.log("parti finished-------------")
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
    console.log("Key comparing: ",keyComparing);
}
export default quickSort;