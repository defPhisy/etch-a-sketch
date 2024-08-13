const container = document.querySelector(".container");

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetCanvasGrid);

function getGridLength() {
  const userInput = getUserInput();
  const checkedInput = checkUserInput(userInput);
  return checkedInput;
}

function getUserInput() {
  return parseInt(
    prompt(
      "What canvas length you want to choose? \n You can pick between 1 and 100!"
    )
  );
}

function checkUserInput(input) {
  while (input > 100 || input <= 0) {
    input = parseInt(
      prompt(
        `${input} is out of range. Please select a number between 1 and 100!`
      )
    );
  }
  return input;
}

function createCanvasGrid() {
  const squaresLength = getGridLength();
  const canvasWidth = container.clientWidth;
  const squareLength = canvasWidth / squaresLength;

  for (let i = 0; i < squaresLength; i++) {
    const column = document.createElement("div");
    column.classList = `column${i + 1}`;
    container.appendChild(column);

    for (let i = 0; i < squaresLength; i++) {
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
