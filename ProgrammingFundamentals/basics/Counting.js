const Counting = (arr,T) => {
    let count = 0;
    for(let i = 0; i<arr.length;i++){
        if(T(arr[i])){
            count++;
        }
    }
    return count;
}
export default Counting;