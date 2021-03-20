import NodeData from './NodeData.js';

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    getHead(){
        return this.head;
    }
    addToBegining(item){
        let newItem = new NodeData(item);
        if(this.head===null){
            this.head = newItem;
        }
        else{
            newItem.next = this.head;
            this.head=newItem;
        }
        this.size++;
    }
    shift()//removing the first element
    {
        if(this.head===null){
            return -1;
        }
        else{
            let tmp = this.head;
            this.head=this.head.next;
            this.size--;
            return tmp;
        }
    }
    addToEnd(item){
        let newItem = new NodeData(item);

        let currentElementForTheLoop;
        if(this.head === null){
            this.head = newItem;
            //console.log("This is in the add function","The new head is: "+newItem.element);
        }
        else{
            currentElementForTheLoop = this.head;
            let indexForTheNewElement = 1; //this first element is the head
            while(currentElementForTheLoop.next){
                currentElementForTheLoop= currentElementForTheLoop.next;
                indexForTheNewElement++;
            }
            currentElementForTheLoop.next = newItem;
            //console.log("This is in the add function","The new element was put in this index: "+indexForTheNewElement);
        }
        this.size++;
    }
    indexOf(element){
        let count = 0;
        let itemIterator = this.head;
        while(itemIterator!==null){
            if(itemIterator.element===element){
                return count;
            }
            count++;
            itemIterator = itemIterator.next;
        }
        return -1;
    }
    isEmpty(){
        return this.size===0;
    }
    reverse(){
        if(this.head===null){
            console.log("You want reverse an empty list!");
        }
        else{
            let currentElement = this.head;
            this.head=null;
            while(currentElement!==null){
                let theNewPrevElement = currentElement;
                currentElement = currentElement.next;
                theNewPrevElement.next = this.head;
                this.head = theNewPrevElement;
            }
        }
    }
    insertAt(item,index){
        if(index>0 && index>this.size){//if the index is bigger than 0 and bigger than the size, we got problem. The good cases(where don't go in) (the size is 4, the index 3)  (the size is 0, the index is 0)
            console.log("This is the insertAt function","The new element can be inserted-> size: "+this.size+" given index:"+index)
            return false;
        }
        else{
            let newItem = new NodeData(item)
            let beforeTheSearcedIndex;
            let iteratorToTheList;
            if(index===0){
                newItem.next=head;//null
                this.head = newItem;
            }
            else{
                let i = 0;
                iteratorToTheList = this.head;
                while(i<index){
                    beforeTheSearcedIndex=iteratorToTheList;
                    iteratorToTheList=iteratorToTheList.next;
                    i++;
                }
                console.log("This is the insertAt function","The found index is "+i+" the previous elem is: "+beforeTheSearcedIndex.next)
                beforeTheSearcedIndex.next = newItem; 
                newItem.next = iteratorToTheList;
            }

        }
        this.size++;
        return true;
    }
    removeFrom(index){
        if(index>0 && index>this.size){
            return -1;
        }
        else{
            let itemIterator,itemIteratorBefore;
            let i = 0;
            itemIterator = this.head;
            itemIteratorBefore = itemIterator;
            if(index===0){
                this.head=itemIterator.next;
            }
            else{
                while(i<index){
                    itemIteratorBefore = itemIterator;
                    itemIterator = itemIterator.next;
                    i++;
                }
                console.log("This is the removeFrom function","The found index is "+i+" the previous elem is "+itemIteratorBefore.element);
                itemIteratorBefore.next=itemIterator.next;
            }
            this.size--;
        }
    }
    listSize(){
        return this.size;
    }
    printList(){
        let currentElement = this.head;
        let str = "[ ";
        while(currentElement){
            str += currentElement.element + ", ";
            currentElement = currentElement.next;
        }
        str = str.substring(0,str.length-2);
        str+=" ]";
        console.log(str);
    }
}
export default SinglyLinkedList;