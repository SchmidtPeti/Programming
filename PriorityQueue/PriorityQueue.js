import Record from './Record.js';
class PriorityQueue{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length===0;
    }
    setEmpty(){
        this.items = [];
    }
    add(element,priority){
        let nextElement = new Record(element,priority);
        let contain = false;
        for(let i=0;i<this.items.length;i++){
            if(this.items[i].priority<nextElement.priority){//the biggest priority element will be at front
                this.items.splice(i,0,nextElement);
                contain = true;
                break; //exit from the loop
            }
        }
        if(!contain){
            this.items.push(nextElement);
        }
    }
    remMax(){
        if(this.items.length>0){
            return this.items.shift();
        }
        else{
            return "NoElement";
        }
    }
    getMax(){
        if(this.items.length>0){
            return this.items[0];
        }
        else{
            return "NoElement"
        }
    }
    printAll(){
        if(this.items.length>0){
            for(let i =0; i<this.items.length;i++){
                console.log((i+1)+". ","element: "+this.items[i].item+" priority: "+this.items[i].priority);
            }
        }
        else{
            return "NoElement";
        }
    }
}
export default PriorityQueue;