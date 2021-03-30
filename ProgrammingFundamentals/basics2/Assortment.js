const Assortment = (arr,T) => {
    let arrayOne = [];
    let arrayTwo = [];
    if(arr.length>0){
        for(let i =0;i<arr.length;i++){
            if(T(arr[i])){
                arrayOne.push(arr[i]);
            }
            else{
                arrayTwo.push(arr[i]);
            }
        }
        return {trueArray : arrayOne, falseArray: arrayTwo};
    }
    return {trueArray : arrayOne, falseArray: arrayTwo};
}
export default Assortment;