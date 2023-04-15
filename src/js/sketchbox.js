let color = "black";
createBoxes(32);

function createBoxes(size) {
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amountOfBoxes = size * size;
    for (let i = 0; i < amountOfBoxes; i++) {
        let div = document.createElement("div");
        div.classList.add("boxes");
        div.style.backgroundColor = "white";
        div.addEventListener("mouseover", coloring);
        container.insertAdjacentElement("beforeend", div);
    }
}

function size() {
    let input = prompt("Size of the sketchbox? (1-100)");
    while (input <= 0 || input > 100)
        input = prompt("Wrong size, try again. (1-100)");
    return input;
}

function coloring() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else this.style.backgroundColor = color;
}

function setColor(colorChoice) {
    color = colorChoice;
}

function reset() {
    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => (box.style.backgroundColor = "white"));
}
