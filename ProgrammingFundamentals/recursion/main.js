const sum = (num) => {
    if(num==0){
        return 0;
    }
    return num + sum(num-1);//10+9+8...+0
}
let result = sum(10);
console.log("summing the numbers until 10: ",result);