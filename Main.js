import ImprovedBubbleSort from "./ImprovedBubbleSort/ImprovedBubbleSort.js";
import { MaxSelectionSort } from "./SelectionSort/SelectionSort.js";

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
document.getElementById("ImprovedBubble").addEventListener("click", ImprovedBubble);
document.getElementById("MaxSelection").addEventListener("click", MaxSelection);
