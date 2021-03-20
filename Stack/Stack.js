class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length === 0){
            return "UnderFlow"
        }
        return this.items.pop();
    }
    top(){
        if(this.items.length===0){
            return "NoElement";
        }
        return this.items[this.items.length-1];

    }
    isEmpty(){
        return this.items.length===0;
    }
    setEmpty(){
        this.items = [];
    }
    printAll(){
        let counter = 1;
        let i = this.items.length-1;
        while(i>=0){
            console.log(counter+": ",this.items[i]);
            i--;
            counter++; 
        }
    }
}
export default Stack;