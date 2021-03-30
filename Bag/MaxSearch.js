const MaxSearch = (array) => {
    let max = 0;
    if(array.length>0){
        for(let i = 0; i<array.length;i++){
            if(array[max].count<array[i].count){
                max = i;
            }
        }
        return {exists : true, index : max};
    }
    else{
        return {exists : false, index : -1};
    }
}
export default MaxSearch;