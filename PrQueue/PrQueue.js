class PrQueue{//max heap
    constructor(){
        this.items = [];
        this.n = 0;
    }
    parent(number){
        //return Math.floor(number/2);
        return  ((number + 1) >>> 1) - 1
    }
    left(number){
        //return 2*number;
        return (number << 1) + 1;
    }
    right(number){
        //return 2*number+1;
        return (number + 1) << 1;
    }
    add(item){
        let j = this.n;
        this.items[j] = item;
        let i = this.parent(j);
        while(j>0&&this.items[i]<item){
            //[this.items[i],this.items[j]] = [this.items[j],this.items[i]];
            let tmp = this.items[i];
            this.items[i] = this.items[j];
            this.items[j] = tmp;
            j = i;
            i = this.parent(i);
        }
        this.n+=1;
    }
    remMax(){
        let max = this.items[0];
        this.items[0] = this.items[this.n-1];
        this.n-=1;
        this.sink(0,this.n);
        return max;
    }
    sink(k,n){
        let i = k;
        let j = this.left(k);
        let b = true;
        while(j<=n&&b){
            if(j<n&&this.items[j+1]>this.items[j]){
                j++;
            }
            if(this.items[i]<this.items[j]){
                let tmp = this.items[i];
                this.items[i] = this.items[j];
                this.items[j] = tmp;
                i = j;
                j = this.left(j);
            }
            else{
                b = false;
            }
        }
    }
    buildMaxHeap(){
        let i = 1;
        let k = this.parent(this.n-1);
        while(k>=0){
            this.sink(k,this.n);
            k--;
            console.log(i+". round",this.items);
            i++;
        }
    }
    heapSort(){
        this.buildMaxHeap();
        console.log("Heap sort after transformation: ",this.items);
        console.log("-------------------");
        let m = this.n-1;
        let i = 1;
        while(m>=0){
            let tmp = this.items[0];
            this.items[0] = this.items[m];
            this.items[m] = tmp;
            m-=1;
            this.sink(0,m);
            console.log(i++," after sink: "+this.items);
        }
    }
}
export default PrQueue;