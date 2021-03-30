import BinaryTree from "./BinaryTree.js";

let Tree = new BinaryTree();
Tree.insert(15);
Tree.insert(25);
Tree.insert(10);
Tree.insert(7);
Tree.insert(22);
Tree.insert(17);
Tree.insert(13);
Tree.insert(5);
Tree.insert(9);
Tree.insert(27);
Tree.printTree();
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 