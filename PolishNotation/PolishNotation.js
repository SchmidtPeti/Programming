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
const pr = (x) => {
    switch(x){
        case "--":
            return 10;
            break;
        case "^":
            return 9;
            break;
        case "*":
            return 8;
            break;
        case "/":
            return 8;
            break;
        case "+":
            return 7;
            break;
        case "-":
            return 7;
            break;  
        case "=":
            return 6;
            break;     
        default:
            return 0;                     
    }
}
const isOperator = (x) => {
    switch(x){
        case "+":
            return true;
            break;
        case "-":
            return true;
            break;
        case "*":
            return true;
            break;
        case "/":
            return true;
            break;
        case "^":
            return true;
            break;
        case "--"://negation
            return true;
            break;    
        case "=":
            return true;
            break;    
        default: 
            return false;    
    }
}
const leftRightOperator = (x,stack) => {
    if(stack.top()==="^"&&x==="^"){
        return false;
    }
    else{
        return true;
    }
}
const toRPN = (equation) => {
    let equationRead = equation; 
    let str = "";
    let stack = new Stack();
    let splittedArray = equationRead.split(' ');
    for(let i = 0;i<splittedArray.length;i++){
        let x = splittedArray[i];
        if(parseInt(x)){
            str+="("+x+")";
        }
        else if(x==="("){
            stack.push(x);
        }
        else if(x===")"){
            while(stack.top() !== "("){
                str+=stack.pop();
            }
            stack.pop();
        }
        else if(isOperator(x)){
            if (leftRightOperator(x,stack)){
                while(!stack.isEmpty()&&stack.top()!=="("&&pr(x)<=pr(stack.top())){
                    str+=stack.pop();
                }
                stack.push(x);
            }
            else{
                while(!stack.isEmpty()&&stack.top()!=="("&&pr(x)<pr(stack.top())){
                    console.log("x",pr(x));
                    console.log("top: ",pr(stack.top()))
                    console.log("eredmeny",pr(x)<pr(stack.top()))
                    str+=(stack.pop());
                }
                stack.push(x);
            }
        }
        console.log(x);
        console.log(stack);
        console.log("--------");
    }
    if(!stack.isEmpty()){
        console.log("last step: ",stack);
        while(!stack.isEmpty()){
            str+=stack.pop();
        }
    }
    console.log(str);
}
export {PolishNotation,toRPN};