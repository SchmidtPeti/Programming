import BinaryTree from "./BinaryTree.js";
import {Record} from './Record.js';

let Tree = new BinaryTree();


let elements = [6,7,3,5,4,1,9,2,8];
for (let element of elements){
    Tree.insert(element);
}
/*Tree.print();

//Tree.inorder(Tree.getRoot());


console.log("---------");


*/
let root = Tree.delete(Tree.getRoot(),6);
Tree.root = root;
//Tree.print();*/
Tree.print();
//console.log(Tree.findMinNode(Tree.getRoot()));

console.log(Tree.isTree(Tree.getRoot()));



//Tree.print();
/*let currentData = Tree.findMinNode(Tree.root);
while(currentData){
    console.log(currentData.data);
    currentData = Tree.next(currentData);
}*/
//console.log(Tree.isTree(Tree.getRoot()));
//console.log(Tree.delRoot(Tree.getRoot()));


//Polish Notation in Binary Tree

//Tree.root = root;
//console.log(Tree.isTree(root));
/*let root = new Record();
root.data = '+';
root.left = new Record();
root.left.data = '/';
root.left.left = new Record();
root.left.left.data = 'b';
root.left.right = new Record();
root.left.right.data = '-';
root.left.right.left = new Record();
root.left.right.left.data = 'a';
root.left.right.right = new Record();
root.left.right.right.data = 'c';
root.right = new Record();
root.right.data = '*';
root.right.left = new Record();
root.right.left.data = '^';
root.right.left.left = new Record();
root.right.left.left.data = 'b';
root.right.left.right = new Record();
root.right.left.right.data = '2';
root.right.right = new Record();
root.right.right.data = 'd';
*/


//Tree.inorder(root);

//let Tree2 = new BinaryTree();
//Tree2.root = root;
//Tree2.print();



//console.log(Tree.search(Tree.getRoot(),25));
//Tree.print();
//Tree.inorder(Tree.root);
//Tree.preorder(Tree.root);
//Tree.levelOrder();
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 