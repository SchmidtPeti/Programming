import NodeData from "./NodeData.js";

class DoublyLinkedList{
    constructor(){
        this.head=null;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }
    push(element){
        let newData = new NodeData(element);
        newData.next = this.head;
        newData.prev = null;
        if(this.head != null){
            this.head.prev = newData;
        }
        this.head = newData;
    }
    reverse(){
        if(this.head===null){
            console.log("You want reverse an empty list!");
        }
        else{
            let currentElement = this.head;
            this.head=null;
            let tmp = null;
            while(currentElement){
                tmp = currentElement.prev;
                currentElement.prev = currentElement.next;
                currentElement.next = tmp;
                currentElement = currentElement.prev;
            }
            if(tmp!=null){
                //console.log("we are here because of ",tmp.prev.element);
                this.head = tmp.prev;
            }
        }
        this.head = this.getTail();//it is not in the function but our page game requires it
    }
    clickPrev(){
        let current = this.head.prev; 
        if(current){
            console.log(current.element);
            this.head = this.head.prev;
        }
        else{
            console.log("This button is disabled");
        }
    }
    clickNext(){
        let current = this.head.next; 
        if(current){
            console.log(current.element);
            this.head = this.head.next;
        }
        else{
            console.log("This button is disabled");
        }
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current.element);
            current = current.next;
        }
    }
}
export default DoublyLinkedList;