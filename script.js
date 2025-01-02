var grid = document.querySelector("#grid")

buildGrid(16, 16);

function buildGrid(height, width) {
    //clear the current grid
    grid.innerHTML = '';

    //add rows of squares
    for (let i = 0; i < height; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        grid.appendChild(row)
        for (let i = 0; i < width; i++) {
            let square = document.createElement("div")
            square.classList.add('square')
            square.attributes.height = 5
            square.attributes.width = 5
            square.addEventListener("mouseover", (event) => {
                console.log('mouseover')
                event.target.style.backgroundColor = 'black'
            })
            row.appendChild(square)
        }
    }
}

function resize() {
    let size = prompt("enter new size")
    buildGrid(size, size);
}