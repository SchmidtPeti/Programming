import Map from "./Map.js";

let MapData = new Map();

MapData.insert(2,1);
MapData.insert(10,2);
MapData.insert(10,3);

console.log(MapData.getData(2));
MapData.printAll();

MapData.insert(10,2); //shouldn't be possible
MapData.printAll();
MapData.erase(2);
if(MapData.inMap(1)){
    console.log("We've found it!");
}
MapData.printAll();