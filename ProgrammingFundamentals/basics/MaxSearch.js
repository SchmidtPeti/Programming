const MaxSearch = (arr) => {
    if(arr.length===0){
        return -1;
    }
    else{
        let max = 0;
        for(let i=0; i<arr.length;i++){
            if(arr[i]>arr[max]){
                max = i;
            }
        }
        return arr[max];
    }
}
export default MaxSearch;