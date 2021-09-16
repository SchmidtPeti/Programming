import BinarySearch from './ChangedBinarySearch.js';
import BinarySearchFromData from './ChangedBinarySearchData.js';
import Record from './Record.js';

class Map{//items are arranged
    constructor(){
        this.items = [];
    }
    count(){
        return this.items.length;
    }
    setEmpty(){
        this.items = [];
    }
    insert(element,key){
        let newItem = new Record(element,key);
        let {idx,found} = BinarySearch(this.items,key);
        if(!found){
            this.items.splice(idx,0,newItem);
        }
        else{
            //this.items[idx] = newItem;
        }
    }
    erase(key){
        let {idx,found} = BinarySearch(this.items,key);
        if(found){
            this.items.splice(idx,1);
        }
        else{
            return "NoElement";
        }
    }
    inMap(key){
        let {idx,found} = BinarySearch(this.items,key);
        return found;
    }
    getData(key){
        let {idx,found} = BinarySearch(this.items,key);
        if(found){
            return this.items[idx].element;
        }
        else{
            return "NoElement";
        }
    }
    getKeyFromData(data){
        if(this.items.filter(x=>x.element===data).length>0){
            return this.items.filter(x=>x.element===data)[0].key
        }
        return "NoElement"
    }
    printAll(){
        for(let i = 0; i<this.items.length;i++){
            console.log("key: "+this.items[i].key," data: "+this.items[i].element);
        }
        //console.log("---------------------");
    }
}
export default Map;