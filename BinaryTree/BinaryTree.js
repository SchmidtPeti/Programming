import {Record} from "./Record.js";
import PrintBinaryTree from "./PrintBinaryTree.js";
import Queue from "../Queue/Queue.js";
class BinaryTree{
    constructor(){
        this.root = null;   
        this.array = [];
    }
    getRoot(node){
        return this.root;
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
                newRecord.parent = current;
            }
            else{
                this.insertRecord(current.left,newRecord)
            }
        }
        else{
            if(current.right === null){
                current.right = newRecord;
                newRecord.parent = current;
            }
            else{
                this.insertRecord(current.right,newRecord);
            }
        }
    }
    inorder(node)//Inorder (Left, Root, Right)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node)//Preorder (Root, Left, Right)
    {
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node)//Postorder (Left, Right, Root)
    {
        if(node !== null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    print(){
        let printer = new PrintBinaryTree(this.root);
        printer.printTree();
    }
    search(node,searchedData){
        while(node!==null&&node.data!=searchedData){
            if(searchedData<node.data){
                node = node.left;
            }
            else{
                node = node.right;
            }
        }
        return node;
    }
    remMin = (node_) =>{
        let node = node_;
        let min;
        if(!node.left){
            min = node;
            //node = min.right;
            //min.right = null;
            return {node : min.right, min:min};
        }
        else{
            this.remMin(node.left,min);
        }
    }
    delRoot(node_){
        let node = node_;
        let p = node;
        if(!node.left){
            node = p.right;
        }
        else if(!node.right){
            node = p.left;
        }
        else if(node.right&&node.left){
            let min = this.remMin(node_.right).min;
            node.right = this.remMin(node_.right).node;
            min.left = p.left;
            min.right = p.right;
            min.parent = p.parent;
            node.right.parent = min;
            node.left.parent = min;
            node = min;
        }
        return node;
        //delete p because it was the root
    }
    delete(node,data){
        if(node){
            if(data<node.data){
                this.delete(node.left,data);
            }
            else if(data>node.data){
                this.delete(node.right,data);
            }
            else if(data==node.data){
                return this.delRoot(node);
            }
        }
    }
    findMinNode(node){
        if(node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    levelOrder(){
        let node = this.root;
        if(node!=null){
            let Q = new Queue();
            Q.add(node);
            while(!Q.isEmpty()){
                let s = Q.rem();
                console.log(s.data);
                if(s.left){
                    Q.add(s.left);
                }
                if(s.right){
                    Q.add(s.right);
                }
            }
        }
    }
    next(node_){
        let node = node_;
        let indexNode = node.right;
        if(indexNode){
            while(indexNode.left){
                indexNode = indexNode.left;
            }
        }
        else{
            indexNode = node.parent;
            while(indexNode&&node==indexNode.right){
                node = indexNode;
                indexNode = indexNode.parent;
            }
        }
        return indexNode;
    }
    isTree(node){
        let l = true;
        if(node){
            let minElement = this.findMinNode(node);
            let nextMinElement = this.next(minElement);
            while(l&&nextMinElement){
                l = minElement.data<nextMinElement.data;
                minElement = nextMinElement;
                nextMinElement = this.next(minElement);
            }
        }
        return l;
    }
}
export default BinaryTree;