import {PolishNotation,toRPN} from './PolishNotation.js';

let RPN = "2 4 + 3 * 1 -";
//let result = PolishNotation(RPN);
let normal = "( 11 + 34 ) * 25 - 42";
let normal2 = "12 + 14 + 15";
let normal3 = "-- 12 ^ 13";
let normal4 = "13 = 1 + ( -- 2 ^ 3 ^ 4 + 5 * 6 ) / ( ( 7 + 8 ) * 9 / -- 10 ) - 11 * 12";
let normal5 = "15 = -- 1 ^ 2 + 3 * 4 / ( 5 - 6 * 7 + 8 ) ^ 9 ^ 10 - 11 * 12 - 13";
toRPN(normal5);
//console.log(result);