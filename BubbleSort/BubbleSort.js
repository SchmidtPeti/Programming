const BubbleSort = (arr) => {
    let n = arr.length;
    let Allcomparing = 0;
    let AllSwaps = 0;
    let counter = 1;
    for(let i = 0;i<n-1;i++){
        let swaps = 0;
        let comarping = 0;
        for(let j = 0;j<n-i;j++){
            comarping++;
            if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                swaps+=1;
            }   
        }
        Allcomparing+=comarping;
        AllSwaps+=swaps;
        console.log("Swaps: ",swaps);
        console.log("Comparing: ",comarping);
        console.log(counter+". round ",arr);
        counter++;
    }
    console.log("All comparing: ",Allcomparing);
    console.log("All swaps: ",AllSwaps);
}
export default BubbleSort;