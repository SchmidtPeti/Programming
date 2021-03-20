import Stack from './Stack.js';

let stackStructure = new Stack();

stackStructure.push("I have to eat my lunch!");
stackStructure.push("I'm thristy and I need a drink");
stackStructure.push("I sit too much I need some walking.");

//stackStructure.printAll();

/*console.log("What will i do first?")
console.log(stackStructure.top());
console.log(stackStructure.top());*/

/*let ImDoneWithThis = stackStructure.pop();
console.log("Im done with this "+ImDoneWithThis);
stackStructure.printAll();
console.log(stackStructure.pop());
stackStructure.printAll();*/


/*console.log("then what's next?");
console.log(stackStructure.top());*/


stackStructure.setEmpty();
const checkPalindrom = (str) =>{
    for(let j=0;j<str.length;j++){
        stackStructure.push(str[j]);
    }
    let i = 0;
    while(!stackStructure.isEmpty()){
        if(str[i++]!==stackStructure.pop()){
            return false;
        }
    }
    return true;
}
console.log(checkPalindrom("abbsbba"));
console.log(checkPalindrom("abba"));
console.log(checkPalindrom("abbsa"));
