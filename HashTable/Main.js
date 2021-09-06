const h1 = number => {return number%11};
const h2 = number => {return 1+(number%10)};

const linear = (trying,length,number_) => {
    return (h1(number_)+trying)%length;
}
const square = (number,trying,length) => {
    let c1 = 8.
    let c2 = 5;
    return (h1(number)+c1*trying+c2*Math.pow(trying,2))%length;
}
const double = (number,trying,length) => {
    return (h1(number)+trying*h2(number))%length;
}
let number = 57;
let trying_ = 1;
console.log(linear(trying_,11,number));