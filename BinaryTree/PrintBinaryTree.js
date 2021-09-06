import {PrintRecord} from './Record.js';

class PrintBinaryTree{
    constructor(root){
        this.root = root;
        this.array = [];
    }
    printTree(){
        this.printTheTree(this.root,1);
        let max = 0;
        for(let i = 0;i<this.array.length;i++){
            if(max<this.array[i].level){
                max=this.array[i].level;
            }
        }
        for(let i = 1;i<=max;i++){
            let count = 0;
            let str = '';
            for(let j = 0;j<this.array.length;j++){
                if(this.array[j].level==i){
                    if(this.array[j].parent){
                    str += "("+this.array[j].data+")p: "+this.array[j].parent.data+")\t";
                    }
                    else{
                    str += "("+this.array[j].data+")p: null)\t";
                    }
                    count++;
                }
            }
            for(let tab=0;tab<Math.floor((max-count)/2);tab++){
                str = '\t'+str;
            }
            console.log(str);
        }
    }
    printTheTree(node,level){
        if(node===null){
            return;
        }
        try{
        this.array.push(new PrintRecord(level++,node.data,node.parent));
        }
        catch(ex){
            console.log(node);
        }
        this.printTheTree(node.left,level);
        this.printTheTree(node.right,level);
    }
}
export default PrintBinaryTree;