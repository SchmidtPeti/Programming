import SinglyLinkedList from '../LinkedList/SinglyLinkedList.js';
import SinglyLinkedListInsertionSort from "./H1L_insertionSort.js";

let list = new SinglyLinkedList();

list.addToEnd(4);
list.addToEnd(2);
list.addToEnd(10);
list.addToEnd(1);
list.addToEnd(3);
list.addToEnd(9);
let head = list.getHead();
list.printList();
SinglyLinkedListInsertionSort(head);
list.printList();