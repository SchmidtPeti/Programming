import DoublyLinkedList from './DoublyLinkedList.js';

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push("Google");
doublyLinkedList.push("Facebook");
doublyLinkedList.push("My profile");
doublyLinkedList.push("Chats");
doublyLinkedList.push("My secret lover");
doublyLinkedList.push("My second secret lover");
doublyLinkedList.push("My wife");
//doublyLinkedList.printList();


//Browser game
/*
let nextElementAfterTheHead = doublyLinkedList.getHead().next;
console.log(nextElementAfterTheHead.element);
console.log("old head: ",doublyLinkedList.getHead().element);
doublyLinkedList.reverse();
nextElementAfterTheHead = doublyLinkedList.getHead().next;
console.log(nextElementAfterTheHead.element);
console.log("new head: ",doublyLinkedList.getHead().element);*/
doublyLinkedList.reverse();

let myAmazingBrowser = doublyLinkedList;

myAmazingBrowser.clickPrev();
myAmazingBrowser.clickNext();
myAmazingBrowser.clickNext();
myAmazingBrowser.clickPrev();
myAmazingBrowser.clickPrev();
myAmazingBrowser.clickPrev();
myAmazingBrowser.clickNext();
