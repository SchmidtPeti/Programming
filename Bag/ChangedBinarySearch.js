const BinarySearch = (arr,key) => {
    let found = false;
    let start = 0;
    let end = arr.length;
    let ind  = 0;
    while(!found&&start<end){
        ind = Math.floor((start+end)/2);
        if(arr[ind].key.localeCompare(key)===1){
            end = ind-1;
        }
        else if(arr[ind].key.localeCompare(key)===0){
            found = true;
        }
        else if(arr[ind].key.localeCompare(key)===-1){
            start = ind+1;
        }
    }
    if(!found){
        if(arr[start]&&arr[start].key===key){
            return {idx:start,found : true}; //it can't check the first element because it will make an outofindex
        }
        else{
            return {idx:start,found : false};           
        }
    }
    else{
        return {idx:ind, found : true}; //there is an element with this key
    }
}
export default BinarySearch;