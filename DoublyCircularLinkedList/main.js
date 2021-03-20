import DoublyCircularLinkedList from './DoublyCircularLinkedList.js';

let list = new DoublyCircularLinkedList();
let list2 = new DoublyCircularLinkedList();

list.insertEnd(7);
list.insertEnd(8);
list.insertEnd(2);
list.insertEnd(3);

list.delete(7);
list.delete(3);

list.printList();