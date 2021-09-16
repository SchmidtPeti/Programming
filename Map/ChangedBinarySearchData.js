const BinarySearchFromData = (arr,element) => {
    let found = false;
    let start = 0;
    let end = arr.length-1;
    let ind  = 0;
    while(!found&&start<=end){
        ind = Math.floor((start+end)/2);
        if(arr[ind].element>element){
            end = ind-1;
        }
        else if(arr[ind].element===element){
            found = true;
        }
        else if(arr[ind].element<element){
            start = ind+1;
        }
    }
    if(!found){
        if(arr[start]&&arr[start].element===element){
            return {idx:start,found : true}; //it can't check the first element because it will make an outofindex
        }
        else{
            return {idx:start,found : false};
        }
    }
    else{
        return {idx:ind, found : true}; //there is an element with this element
    }
}
export default BinarySearchFromData;