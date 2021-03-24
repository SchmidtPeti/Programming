const BinarySearch = (arr,element) => {
    if(arr.length===0){
        return 0;
    }
    let start = 0;
    let end = arr.length;
    let found = false;
    let index = 0;
    while(!found&&start<end){
        console.log("start: "+start+" end: "+end);
        index = Math.floor((start+end)/2);
        if(arr[index]>element){
            end = index-1;
        }
        else if(arr[index]===element){
            found = true;
        }
        else if(arr[index]<element){
            start = index +1;
        }
    }
    if(!found){
        return start;
    }
    else{
        return index;
    }
}
export default BinarySearch;