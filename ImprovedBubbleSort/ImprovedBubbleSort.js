const ImprovedBubbleSort = (arr) => {
    let i = arr.length-1;
    let counter = 0;
    let AllSwaps = 0;
    let Allcomparing = 0;
    while(i>0){
        let swap = 0;
        let swaps = 0;
        let comparing = 0;
        for(let j=0;j<i;j++){
            comparing++;
            if(arr[j]>arr[j+1]){
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
                swap = j;
                swaps++;
            }
        }
        counter++;
        console.log((counter)+". round",arr);
        console.log("Comparing number: ",comparing);
        console.log("Swap numbers: ",swaps);
        AllSwaps+=swaps;
        Allcomparing+=comparing;
        i=swap;
        console.log("------------------------");
    }
    console.log("All comarping: ",Allcomparing);
    console.log("All swaps: ",AllSwaps)
}
export default ImprovedBubbleSort;