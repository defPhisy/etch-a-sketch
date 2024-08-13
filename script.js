const container = document.querySelector(".container");

const canvasWidth = container.clientWidth;
const squaresPerSide = 16;
const squareWidth = canvasWidth / squaresPerSide;

function createCanvasGrid() {
  for (let i = 0; i < squaresPerSide; i++) {
    const column = document.createElement("div");
    column.classList = `column${i + 1}`;
    container.appendChild(column);

    for (let i = 0; i < squaresPerSide; i++) {
      const row = document.createElement("div");
      row.style.width = `${squareWidth}px`;
      row.style.height = `${squareWidth}px`;
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
    const column = columns[i];
    column.remove();
  }
}

function resetCanvasGrid() {
  deleteCanvasGrid();
  createCanvasGrid();
}

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetCanvasGrid);

createCanvasGrid();
