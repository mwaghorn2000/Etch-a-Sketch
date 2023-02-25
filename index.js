let container = document.getElementById("container");
for (let i = 0; i < 16; i++) {
  let gridDivRow = document.createElement("div");
  gridDivRow.className = "grid-row";
  for (let x = 0; x < 16; x++) {
    let gridDiv = document.createElement("div");
    gridDiv.className = "grid";
    gridDivRow.appendChild(gridDiv);
  }
  container.appendChild(gridDivRow);
}
