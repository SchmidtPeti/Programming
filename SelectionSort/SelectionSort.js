const MinSelectionSort = (arr) => {
    let n = arr.length;
    for(let i = 0;i<n-1;i++){
        let min = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){//this first time, that we found element, becames the one what we compare if find a lesser change it(i remains at its postion)
                min = j;
            }
        }
        let tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;
        console.log((i+1)+"swap and next min element: "+arr);
    }
} 
const MaxSelectionSort = (arr) => {
    let n = arr.length;
    let counter = 0;
    for(let i = n-1; i>=0;i--){
        let comparing = 0;
        let swaps = 0;
        let max = i;
        for(let j=0;j<i;j++){
            comparing++;
            if(arr[j]>arr[max]){
                swaps++;
                max=j;
            }
        }
        let tmp = arr[max];
        arr[max] = arr[i];
        arr[i]=tmp;
        console.log("Comparing: ",comparing);
        console.log("Swaps: ",swaps);
        console.log(counter+". round",arr);
        counter++;
    }
}
export {MinSelectionSort,MaxSelectionSort};