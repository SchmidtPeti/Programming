import Stack from '../Stack/Stack.js';
const PolishNotation = (s) => {
    let current = s;
    let array = new Stack();
    let right;
    let left;
    while(current[0] !== undefined){
        if(parseInt(current[0])){
            array.push(parseInt(current[0]));
            console.log(array);
        }
        else{
            switch(current[0]){
                case "+":
                    right = array.pop();
                    left = array.pop();
                    array.push(left+right);
                    console.log(array);
                    break;
                case "*":
                    right = array.pop();
                    left = array.pop();
                    array.push(left*right);
                    break;
                case "-":
                    right = array.pop();
                    left = array.pop();
                    array.push(left-right);
                    break;
                case "/":
                    right = array.pop();
                    left = array.pop();  
                    array.push(left/right);
                    break;  
                case " ":
                    break;  
                default: 
                    break;    
            }
        }
        current = current.substring(1);
    }
    return array;
}
export default PolishNotation;