import Record from './Record.js';
import BinarySearch from './ChangedBinarySearch.js';
import MaxSearch from './MaxSearch.js';

class Bag{//String bag
    constructor(){
        this.items = [];
        this.maxIdx = 0;
    }
    setEmpty(){
        this.items = [];
    }
    putInto(element,count){//i can put into element with more count and still will be good
        let newRecord = new Record(element,count)
        let {idx,found} = BinarySearch(this.items,element);
        if(found){
            this.items[idx].count += count;
            if(this.items[this.maxIdx].count<this.items[idx].count){
                this.maxIdx = idx;
            }
        }
        else{
            this.items.splice(idx,0,newRecord);
            if(idx<=this.maxIdx&&this.maxIdx!==0){
                this.maxIdx++;
            }
            if(this.items[this.maxIdx].count<this.items[idx].count){
                this.maxIdx = idx;
            }
        }
    }
    max(){
        if(this.items.length>0){
            return this.items[this.maxIdx].key;
        }
        else{
            return "NoElement";
        }
    }
    removeItem(element){
        let {idx,found} = BinarySearch(this.items,element);
        if(found){
            this.items[idx].count-=1;
            if(this.items[idx].count===0){
                this.items.splice(idx,1);
            }
            let {exists,index} = MaxSearch(this.items);
            if(exists){
                this.maxIdx = index;
            }
            else{
                this.maxIdx = 0;
            }
        }
        else{
            return "NoSuchElement";
        }
    }
}
export default Bag;