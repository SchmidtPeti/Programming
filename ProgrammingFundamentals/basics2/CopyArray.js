const CopyArray = (arr,ifThisTrue,transformWithThis) => {
    let newArray = [];
    for(let i =0;i<arr.length;i++){
        if(ifThisTrue(arr[i])){
            newArray[i] = transformWithThis(arr[i]);
        }
        else{
            newArray[i] = arr[i];
        }
    }
    return newArray;
}
export default CopyArray;