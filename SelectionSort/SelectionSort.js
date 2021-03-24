const MinSelectionSort = (arr) => {
    let n = arr.length;
    let counter = 1;
    let Allcomparing = 0;
    let AllSwaps = 0;
    for(let i = 0;i<n-1;i++){
        let min = i;
        let comparing = 0;
        let swaps = 1;
        for(let j=i+1;j<n;j++){
            comparing++;
            if(arr[j]<arr[min]){//this first time, that we found element, becames the one what we compare if find a lesser change it(i remains at its postion)
                min = j;
            }
        }
        let tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;
        Allcomparing+=comparing;
        AllSwaps+=swaps;
        console.log((counter+1)+". round",arr);
        console.log("Comparing: ",comparing);
        console.log("Swaps: ",swaps);
        console.log("--------------------------");
        counter++;
    }
    console.log("Comparing: ",Allcomparing);
    console.log("Swaps: ",AllSwaps);
} 
const MaxSelectionSort = (arr) => {
    let n = arr.length;
    let counter = 0;
    let Allcomparing = 0;
    let AllSwaps = 0;
    for(let i = n-1; i>=0;i--){
        let comparing = 0;
        let swaps = 1;
        let max = i;
        for(let j=0;j<i;j++){
            comparing++;
            if(arr[j]>arr[max]){
                max=j;
            }
        }
        let tmp = arr[max];
        arr[max] = arr[i];
        arr[i]=tmp;
        Allcomparing+=comparing;
        AllSwaps+=swaps;
        console.log((counter+1)+". round",arr);
        console.log("Comparing: ",comparing);
        console.log("Swaps: ",swaps);
        console.log("--------------------------");
        counter++;
    }
    console.log("Comparing: ",Allcomparing);
    console.log("Swaps: ",AllSwaps);
}
export {MinSelectionSort,MaxSelectionSort};