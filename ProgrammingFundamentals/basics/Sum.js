const Sum = (arr) => {
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += arr[i];//=(sum = sum + arr[i])
    }
    return sum;
}
export default Sum;