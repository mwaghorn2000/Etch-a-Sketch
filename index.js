let container = document.getElementById("container");
for (let i = 0; i < 16; i++) {
  let gridDivRow = document.createElement("div");
  gridDivRow.className = "grid-row";
  gridDivRow.id = "grid-row";
  for (let x = 0; x < 16; x++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = "grid";
    gridDiv.id = "grid";
    gridDivRow.appendChild(gridDiv);
  }
  container.appendChild(gridDivRow);
}

let grid = document.getElementsByClassName("grid");
for (let j = 0; j < grid.length; j++) {
  grid[j].addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
  });
}
