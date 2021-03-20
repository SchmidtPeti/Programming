const SinglyLinkedListInsertionSort = (head) => {
    let r = head;
    if(r!==null){
        let s = r.next;//head has also its own value
        while(s){
            if(r.element<=s.element){
                r = s;
            }
            else{
                r.next = s.next;
                console.log("r.next",(r.next).element);
                console.log("s.next",(s.next).element);
                let p = head;
                let q = head;
                console.log("q element: "+q.element);
                console.log("s element: "+s.element);
                while(q.element<=s.element){
                    console.log("element: "+q.element+" and "+s.element);
                    p = q;
                    q = q.next;
                }
                s.next = q;
                p.next =s;
            }
            s=r.next;
        }
    }
}
export default SinglyLinkedListInsertionSort;