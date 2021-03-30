const Union = (arr,arrTwo) => {
    let n = arr.length;
    let UnionArray = arr;
    for(let i=0;i<n;i++){
        let j = 0;
        while(j<arrTwo.length&&arr[i]!==arrTwo[j]){
            j++;
        }
        if(j>=arrTwo.length){
            UnionArray.push(arrTwo[i]);
        }
    }
    return UnionArray;
}
export default Union;
