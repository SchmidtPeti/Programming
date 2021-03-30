const Deciding = (arr,T) => {
    for(let i = 0; i<arr.length;i++){
        if(T(arr[i])){
            return true;
        }
    }
    return false;
}
export default Deciding;