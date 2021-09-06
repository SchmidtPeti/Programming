import Bag from "./Bag.js";

let BagData = new Bag();

BagData.putInto("I am a fat one",2);
BagData.putInto("I am a fat one",3);
BagData.putInto("My hat",1);
BagData.putInto("Your hat",1);
BagData.putInto("Apple",6);
console.log(BagData.items);
BagData.removeItem("Apple");
BagData.removeItem("Apple");
BagData.removeItem("Your hat");
console.log(BagData.items);
console.log(BagData.max());