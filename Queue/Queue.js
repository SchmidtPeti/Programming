class Queue{
    constructor(){
        this.items = []
    }
    add(elem){
        this.items.push(elem);
    }
    rem(){
        if(this.items.length===0){
            return "NoElement";
        }
        return this.items.shift();
    }
    first(){
        if(this.items.length===0){
            return "NoElement";
        }
        return this.items[0];
    }
    length(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length===0;
    }
    setEmpty(){
        return this.items = [];
    }
    Queue(){
        if(this.items.length===0){
            return "NoElment";
        }
        this.items.shift();
    }
    printAll(){
        if(this.items.length===0){
            console.log("[ ]");
        }
        else{
            let str = "[ "
            for(let i=0;i<this.items.length;i++){
               // str += (i+1) + ": " + this.items[i]+", "
               str+=this.items[i]+", ";
            }
            str = str.substring(0,str.length-2);
            str += " ]";
            console.log(str);
        } 
    }
}
export default Queue;