var grid = document.querySelector("#grid")
var gridSize = 960
var squareSize = 16

buildGrid(squareSize, squareSize);

function buildGrid(height, width) {
    grid.innerHTML = '';
    grid.style.height = `${gridSize}px`
    grid.style.width = `${gridSize}px`

    //add rows of squares
    for (let i = 0; i < height; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        grid.appendChild(row)
        for (let i = 0; i < width; i++) {
            let square = document.createElement("div")
            square.classList.add('square')
            square.style.height = `${gridSize/height}px`
            square.style.width = `${gridSize/width}px`        
            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = getRandomRGB()
            })
            row.appendChild(square)
        }
    }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    return `rgb(${r}, ${g}, ${b})`;
}

function resize() {
    let squareSize = Math.min(prompt("enter new size (max 100)"), 100)
    buildGrid(squareSize, squareSize);
}