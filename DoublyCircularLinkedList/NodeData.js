class NodeData{
    constructor(element){
        this.element = element;
        this.prev = this;
        this.next = this;
    }
}
export default NodeData;
