const container = document.querySelector(".container");

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetCanvasGrid);

function createCanvasGrid() {
  const squaresPerSide = 25; //16 creates a 16x16 grid 
  const canvasWidth = container.clientWidth;
  const squareLength = canvasWidth / squaresPerSide;

  for (let i = 0; i < squaresPerSide; i++) {
    const column = document.createElement("div");
    column.classList = `column${i + 1}`;
    container.appendChild(column);

    for (let i = 0; i < squaresPerSide; i++) {
      const row = document.createElement("div");
      row.style.width = `${squareLength}px`;
      row.style.height = `${squareLength}px`;
      row.classList = `row${i + 1}`;
      row.style.backgroundColor = "red";
      row.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "cyan";
      });
      column.appendChild(row);
    }
  }
}

function deleteCanvasGrid() {
  const columns = container.querySelectorAll("div");
  for (let i = 0; i < columns.length; i++) {
    columns[i].remove();
  }
}

function resetCanvasGrid() {
  deleteCanvasGrid();
  createCanvasGrid();
}

createCanvasGrid();
