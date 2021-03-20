import ImprovedBubbleSort from "./ImprovedBubbleSort/ImprovedBubbleSort.js";

function ImprovedBubble(){
    let elements = document.getElementById('ImprovedSortArray').value.split('.').map(x=>+x);
    ImprovedBubbleSort(elements);
}