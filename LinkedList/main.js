import SinglyLinkedList from "./SinglyLinkedList.js";

let list = new SinglyLinkedList();

list.addToBegining("I am a cat.");
list.addToBegining("Google search for cats");
list.addToBegining("I am not a fat cat!");
list.printList();
list.addToBegining("Fat cat images");
list.printList();

//simple remove

/*let removeTop = list.shift();
list.printList();
console.log("("+removeTop.element+") was deleted from the list");*/

//--------------------

//indexOf an element
/*console.log("(I am a cat.) can be found in: "+list.indexOf("I am a cat."));*/

//------

//reverse function


/*list.reverse();
list.printList();*/

//this is list is empty

/*console.log("This list is Empty? "+list.isEmpty());*/

//--------

//adding to end

/*list.addToEnd("Am I a fat cat?");
list.printList();*/
//----------------

//inserting to one specific index


/*if(list.insertAt("Can i be cute cat if i am fat?",2)){
    console.log("Succesful insertion.");
    list.printList();
}
else{
    console.log("Failed insertion.")
}*/

//-------------------------

//removing from an index
/*
if(list.removeFrom(2)!==-1){
    console.log("You've deleted an element.");
    list.printList();
}
*/
//---------