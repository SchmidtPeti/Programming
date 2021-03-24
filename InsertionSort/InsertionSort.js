const InsertionSort = (arr) => {
    let counter = 1;
    let Allcomparing = 0;
    let AllSwaps = 0;
    for(let i = 1;i<arr.length;i++){
        let currentElement = arr[i];
        let insertionPointer = i-1; //so it won't compare two same element
        let comparing = 0;
        let swaps = 0;

        while(insertionPointer>=0&&arr[insertionPointer]>currentElement){ //it will check if this element is smaller than the element before it 
            comparing++;
            swaps++;
            arr[insertionPointer+1] = arr[insertionPointer];
            insertionPointer = insertionPointer-1;
            if(insertionPointer<0||arr[insertionPointer]<=currentElement){
                swaps+=2;
            }
        }
        if(arr[insertionPointer]<=currentElement){
            comparing++;
        }
        arr[insertionPointer+1]=currentElement;//before this position the elements are lesser
        console.log(counter+". round",arr);
        console.log("Comparing: ",comparing);
        console.log("Swaps: ",swaps);
        counter++;
        AllSwaps+=swaps;
        Allcomparing+=comparing;
    }
    console.log("----------------");
    console.log("Comparing number: ",Allcomparing);
    console.log("Swaps number: ",AllSwaps);
}
export default InsertionSort;
