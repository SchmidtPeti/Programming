import ImprovedBubbleSort from "./ImprovedBubbleSort/ImprovedBubbleSort.js";
import { MaxSelectionSort,MinSelectionSort } from "./SelectionSort/SelectionSort.js";
import InsertionSort from "./InsertionSort/InsertionSort.js";
import quickSort from "./QuickSort/QuickSortSecond.js";
import mergeSort from "./MergeSort/MergeSort.js";

const ImprovedBubble = () => {
    let element = document.getElementById('ImprovedSortArray').value;
    let elements = element.split(`,`).map(x=>+x);
    ImprovedBubbleSort(elements);
}
const MaxSelection = () => {
    let element = document.getElementById('MaxSelectionArray').value;
    let elements = element.split(`,`).map(x=>+x);
    MaxSelectionSort(elements);
}
const MinSelection = () => {
    let element = document.getElementById('MinSelectionArray').value;
    let elements = element.split(`,`).map(x=>+x);
    MinSelectionSort(elements);
}
const InsertionSortMethod = () => {
    let element = document.getElementById('InsertionArray').value;
    let elements = element.split(`,`).map(x=>+x);
    InsertionSort(elements);
}
const QuickSortMethod = () => {
    let element = document.getElementById('QuickSortArray').value;
    let elements = element.split(`,`).map(x=>+x); 
    quickSort(elements);   
}
const MergeSortMethod = () => {
    let element = document.getElementById('MergeSortArray').value;
    let elements = element.split(`,`).map(x=>+x); 
    mergeSort(elements);      
}
document.getElementById("ImprovedBubble").addEventListener("click", ImprovedBubble);
document.getElementById("MaxSelection").addEventListener("click", MaxSelection);
document.getElementById("MinSelection").addEventListener("click", MinSelection);
document.getElementById("InsertionSort").addEventListener("click", InsertionSortMethod);
document.getElementById("QuickSort").addEventListener("click", QuickSortMethod);
document.getElementById("MergeSort").addEventListener("click", MergeSortMethod);

