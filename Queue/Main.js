import Queue from "./Queue.js";

let queueList = new Queue();

queueList.add(3);
queueList.add(8);
queueList.add(10);
//queueList.printAll();
/*console.log(queueList.first());
queueList.Queue();
console.log(queueList.first());*/
/*let a = queueList.rem();
console.log(a);
queueList.printAll();*/

queueList.setEmpty();
queueList.printAll();

const isStuttering = (str) => {
    if(str.length % 2 === 0){
        for(let i = 0; i<str.length/2;i++){
            queueList.add(str[i])
        }
        let queueListSecondHalf = new Queue(); 
        for(let j = str.length/2; j<str.length;j++){
            queueListSecondHalf.add(str[j]);
        }
        while(!queueList.isEmpty()){
            if(queueList.rem()!==queueListSecondHalf.rem()){
                return false;
            }
        }
        return true;

    }
    return false;
}

let example = "ImbetterImbetter";
console.log(isStuttering(example));
example = "ImbetterImbutter";
console.log(isStuttering(example));