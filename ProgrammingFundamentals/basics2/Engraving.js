const Engraving = (X,Y) => {
    let array = [];
    if(X.length===0||Y.length===0){
        return array;
    }
    for (let i = 0; i < X.length; i++) {
        let j = 0;
        while(j<Y.length&&X[i]!==Y[j]){
            j++;
        }
        if(j<Y.length){
            array.push(X[i]);
        }
    }
    return array;
}
export default Engraving;