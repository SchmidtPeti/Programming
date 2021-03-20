import NodeData from './NodeData.js';
class DoublyCircularLinkedList{//The elements are strictly monotonically increasing -> mainly operates with numbers.
    constructor(){
        this.head = null; //we don t need the tail(simply prev) 
    }
    precede(elem,thisElementBefore){//we want insert an element before a element
            let tmp = thisElementBefore.prev;
            elem.prev = tmp;
            elem.next = thisElementBefore;
            thisElementBefore.prev = elem;
            tmp.next = elem;
    }
    follow(elem,thisElementBefore){
        let tmp = elem.next;
        thisElementBefore.prev = elem;
        thisElementBefore.next = tmp;
        elem.next = thisElementBefore;
        tmp.prev = thisElementBefore; 
    }
    unlink(element){
        let prevDeletedElement = element.prev;
        let nextDeletedElement = element.next;
        prevDeletedElement.next = nextDeletedElement;
        nextDeletedElement.prev = prevDeletedElement;
        element.prev = element;
        element.next = element;
        if(prevDeletedElement===element&&nextDeletedElement===element){
            this.head=null;
        }
    }
    insertEnd(element){
        let nodeData = new NodeData(element);
        if(this.head===null){
            this.head = nodeData;
        }
        else{
          //  console.log(this.head.element);
            let last = this.head.prev;
            nodeData.next = this.head;
            this.head.prev = nodeData;
            nodeData.prev = last;
            last.next = nodeData;
        }
    }
    delete(element)//It deletes an element from 
    {
        let current = this.head.next;
        while(current!==this.head){
            if(current.element === element){
                this.unlink(current);
                return true;
            }
            current = current.next;
        }
        if(element===this.head.element){
            this.head = current.next;
            this.unlink(current);
            return true;
        }
        return false;
    }
    tryOutThePrecede(){//suppose there is at least 3 element in the list
        
        
        console.log(this.head.element);
        this.precede(this.head,this.head.prev);
        this.printList()

    }
    printList(){
        if(this.head==null){
            console.log("[ ]");
        }
        else{
            let currentElement = this.head.next;
            let str = "[ ";
            while(currentElement!==this.head){
                str += currentElement.element + ", ";
                currentElement = currentElement.next;
            }
            str+=this.head.element;
            str+=" ]";
            console.log(str);
        }
    }
}
export default DoublyCircularLinkedList;