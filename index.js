const button = document.getElementById("reset");

// adds click event to button which prompts user to pic a row size
// for their etch-a-sketch
button.addEventListener("click", () => {
  let size = prompt("How many squares in each row?");
  while (size < 1 || size > 100) {
    size = prompt("Must be between 1 and 100");
  }
  resetGrid(size);
});

// creates an empty grid of divs. the parameter size detimines
// the size of the row
const resetGrid = (size) => {
  let container = document.getElementById("container");
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let gridDivRow = document.createElement("div");
    gridDivRow.className = "grid-row";
    for (let x = 0; x < size; x++) {
      let gridDiv = document.createElement("div");
      gridDiv.className = "grid";
      gridDiv.dataset.rgbPercent = "90";
      gridDivRow.appendChild(gridDiv);
    }
    container.appendChild(gridDivRow);
  }

  // adds an event listener to all grid elements which changes the
  // background color of the item hovered over to black
  let grid = document.getElementsByClassName("grid");
  for (let j = 0; j < grid.length; j++) {
    grid[j].addEventListener("mouseenter", (event) => {
      const target = event.target;
      const rgbValue = target.dataset.rgbPercent;
      const rgbColor = `rgb(${rgbValue}%,${rgbValue}%,${rgbValue}%)`;
      target.dataset.rgbPercent = parseInt(target.dataset.rgbPercent) - 10;
      target.style["background"] = rgbColor;
    });
  }
};

resetGrid(16);
