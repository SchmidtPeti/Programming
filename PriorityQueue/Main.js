import PriorityQueue from "./PriorityQueue.js";

let pQueue = new PriorityQueue();

pQueue.add("do my work",5);
pQueue.add("drink a beer",3);
pQueue.add("clean my house",4);

console.log(pQueue.remMax());

console.log(pQueue.getMax());

pQueue.printAll();