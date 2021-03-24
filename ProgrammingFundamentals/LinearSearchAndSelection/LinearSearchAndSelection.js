const LinearSearch = (arr,T) =>{
    let i = 0;
    while(i<arr.length&&!T(arr[i])){
        i++;
    }
    if(arr.length===i){
        return {found: false, idx : -1};
    }
    else{
        return {found: true, idx:i};
    }
}
const selection = (arr,T) => {
    let i = 0;
    while(!T(arr[i])){//endless loop warning
        i++;
    }
    return {idx:i};
}
export {LinearSearch,selection}