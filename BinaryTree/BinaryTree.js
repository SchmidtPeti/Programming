import Record from "./Record.js";
import Queue from "../Queue/Queue.js";
class BinaryTree{
    constructor(){
        this.root = null;   
        this.queue = new Queue();
    }
    insert(data){
        let newRecord = new Record(data);
        if(this.root===null){
            this.root = newRecord;
        }
        else{
            this.insertRecord(this.root,newRecord);
        }
    }
    insertRecord(current,newRecord){
        if(newRecord.data < current.data){
            if(current.left===null){
                current.left = newRecord;
            }
            else{
                this.insertRecord(current.left,newRecord)
            }
        }
        else{
            if(current.right === null){
                current.right = newRecord;
            }
            else{
                this.insertRecord(current.right,newRecord);
            }
        }
    }
    printTree(){
        this.printTheTree(this.root);
    }
    printTheTree(node){
        if(node===null){
            if(!this.queue.isEmpty()){
                this.queue.printAll();
                this.queue.setEmpty();
            }
            return;
        }
        this.queue.add(node.data);
        this.printTheTree(node.left);
        this.printTheTree(node.right);
    }
}
export default BinaryTree;