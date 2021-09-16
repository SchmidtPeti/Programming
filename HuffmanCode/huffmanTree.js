import {Node} from './node.js';
import Map from '../Map/Map.js';

class huffmanTree{  
    constructor(str){  
        let freqCounter = [];  
        for(let i = 0; i < str.length; i++){  
            let currentNumberOfTheString = (isNaN(parseInt(freqCounter[str[i]])) ? 0 : parseInt(freqCounter[str[i]]));
            freqCounter[str[i]] = currentNumberOfTheString + 1;  
        }  
        this.freqCounter = freqCounter;

        this.huffmanTree = this.getHuffmanTree();  
        let map = this.getHuffmanCode(this.huffmanTree);
        this.binaryStr = this.encodeString(map, str);
        //console.log(this.decodeHuffmanCode(this.binaryStr,map));
        console.log("Hosssz: ",this.binaryStr.length)
    }
    getHuffmanTree(){
        let nodeArray = []
        for(let oneCharacter in this.freqCounter){  
            let node = new Node(this.freqCounter[oneCharacter], oneCharacter); 
            nodeArray.push(node);  
        }
        let nodesTobeSaved = [];
        while(nodeArray.length !== 1){  
            nodeArray.sort((elemLess, elemBigger) => {
                return elemLess.val - elemBigger.val;
            });
                
            let node = new Node(nodeArray[0].val + nodeArray[1].val, '');
            nodesTobeSaved.push(nodeArray[0]);
            nodesTobeSaved.push(nodeArray[1]);
            let lastElemIndex = nodesTobeSaved.length -1
            node.left  = nodesTobeSaved[lastElemIndex-1];
            node.right  = nodesTobeSaved[lastElemIndex];
            nodeArray = nodeArray.slice(2);
            nodeArray.push(node);
        }
        return nodeArray[0];
    }  
  
    getHuffmanCode(tree){
        let huffmanTable = new Map();
        const traversal = (node, huffmanCodeOfTheCharacter) => {
            //this where the recursion stack ends
            if (!node.left && !node.right) {
                return;
            }
            //first we go to the left side then go to right side
            if (node.left && (!node.left.left && !node.left.right)){
                huffmanTable.insert(huffmanCodeOfTheCharacter + '0', node.left.char);

            }
            if (node.right && !node.right.left && !node.right.right){
                huffmanTable.insert(huffmanCodeOfTheCharacter + '1',node.right.char);

            }
            if(node.left){
                traversal(node.left, huffmanCodeOfTheCharacter + '0');  
            }  
            if(node.right){
                traversal(node.right, huffmanCodeOfTheCharacter + '1');  
            }  
        };  
        traversal(tree, '');
        return huffmanTable;
    }  
  
    //Returns the final compressed binary string  
    encodeString(map, originStr){  
        let result = '';
        for(let i = 0; i < originStr.length; i++){
            result += map.getData(originStr[i]);
        }
        return result;
    }
    decodeHuffmanCode(HuffmanCode,map){
        let decodedText = '';
        let searchedCode = '';
        for (let i = 0; i < HuffmanCode.length; i++) {
            searchedCode += HuffmanCode[i];
            if(map.getKeyFromData(searchedCode)!=="NoElement"){
                decodedText+=map.getKeyFromData(searchedCode);
                searchedCode = '';
            }
            //console.log(searchedCode);
        }
        console.log(searchedCode);
        return decodedText;
    }
}
export {huffmanTree};