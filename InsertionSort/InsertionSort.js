const InsertionSort = (arr) => {
    let counter = 1;
    for(let i = 1;i<arr.length;i++){
        let currentElement = arr[i];
        let insertionPointer = i-1; //so it won't compare two same element
        let comparing = 1;
        let swaps = 0;

        while(insertionPointer>=0&&arr[insertionPointer]>currentElement){ //it will check if this element is smaller than the element before it 
            comparing++;
            swaps++;
            arr[insertionPointer+1] = arr[insertionPointer];
            insertionPointer = insertionPointer-1;
        }
        arr[insertionPointer+1]=currentElement;//before this position the elements are lesser
        if(comparing>1){
            swaps+=2;
        }
        console.log(counter+". round",arr);
        console.log("Comparing: ",comparing);
        console.log("Swaps: ",swaps);
        counter++;
    }
    console.log("it is not perfect, be awere of the comparing");
}
export default InsertionSort;
