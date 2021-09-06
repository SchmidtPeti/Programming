class Record{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class PrintRecord{
    constructor(level,data,parent){
        this.parent = parent;
        this.level = level;
        this.data = data;
    }
}
export {Record,PrintRecord};