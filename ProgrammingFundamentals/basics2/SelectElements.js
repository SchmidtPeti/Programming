const SelectElements = (arr,T) => {
    let SelectElementArray = [];
    //let db =0;
    for(let i=0;i<arr.length;i++){
        if(T(arr[i])){
            /*
            SelectElementArray[db] = arr[i];
            db++;
            */
            SelectElementArray.push(arr[i]);
        }
    }
    return SelectElementArray;
}
export default SelectElements;