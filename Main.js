import ImprovedBubbleSort from "./ImprovedBubbleSort/ImprovedBubbleSort.js";

const ImprovedBubble = () => {
    let element = document.getElementById('ImprovedSortArray').value;
    let elements = element.split(`.`).map(x=>+x)
    ImprovedBubbleSort(elements);
    console.log(elements);
}
document.getElementById("ImprovedBubble").addEventListener("click", ImprovedBubble);