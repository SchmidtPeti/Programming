const BubbleSort = (arr) => {
    let n = arr.length;
    for(let i = 0;i<n-1;i++){
        for(let j = 0;j<n-i;j++){
            if(j==n-1){
                console.log("the problem: "+arr[j+1]);
            }
            if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = tmp;
            }
            console.log(arr);
        }
    }
}
export default BubbleSort;