const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetCanvasGrid);

function getGridLength() {
  const userInput = getUserInput();
  const checkedInput = checkUserInput(userInput);
  return checkedInput;
}

function getUserInput() {
  return parseInt(
    prompt(
      "What canvas length do you want to choose? \n You can pick between 1 and 100!"
    )
  );
}

function checkUserInput(input) {
  while (input > 100 || input <= 0 || !input) {
    input = parseInt(
      prompt(
        `${input} is out of range. Please select a number between 1 and 100!`
      )
    );
  }
  return input;
}

function createCanvasGrid(length) {
  const container = document.querySelector(".container");
  const squaresLength = length || getGridLength();
  const canvasWidth = container.clientWidth - 32; //32 are the 2rem padding in styles.css
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
      row.style.backgroundColor = "hsl(0, 0%, 100%)";
      row.style.opacity = 1;
      row.addEventListener("mouseover", selectedMods);

      column.appendChild(row);
    }
  }
}

function deleteCanvasGrid() {
  const container = document.querySelector(".container");
  const columns = container.querySelectorAll("div");
  for (let i = 0; i < columns.length; i++) {
    columns[i].remove();
  }
}

function resetCanvasGrid() {
  deleteCanvasGrid();
  createCanvasGrid();
}

function selectedMods(e) {
  const shadesIsChecked = document.querySelector("#shades-of").checked;

  if (shadesIsChecked) {
    modShadesOf(e);
  } else {
    colorPicker(e);
    e.target.style.opacity = 1;
  }
}

function colorPicker(e) {
  const colorPicker = document.querySelector("#color-picker");
  const color = colorPicker.options[colorPicker.selectedIndex].text;

  if (color === "random color") {
    e.target.style.backgroundColor = randomColor();
  } else {
    e.target.style.backgroundColor = color;
  }
}

function randomColor() {
  const red = randomRgbValue();
  const green = randomRgbValue();
  const blue = randomRgbValue();
  const alpha = 1;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function randomRgbValue() {
  return Math.floor(Math.random() * 256);
}

function modShadesOf(e) {
  let parsedOpacity = parseFloat(e.target.style.opacity);
  e.target.style.opacity = parsedOpacity - 0.1;
}

createCanvasGrid(16);
