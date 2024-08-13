const container = document.querySelector(".container");

const canvasWidth = container.clientWidth;
const squaresPerSide = 16;
const squareWidth = canvasWidth / squaresPerSide;

for (let i = 0; i < squaresPerSide; i++) {
  const row = document.createElement("div");
  container.appendChild(row);

  for (let i = 0; i < squaresPerSide; i++) {
    const divRow = document.createElement("div");
    divRow.style.width = `${squareWidth}px`;
    divRow.style.height = `${squareWidth}px`;
    divRow.classList = "row";
    divRow.style.backgroundColor = "red";
    divRow.addEventListener("mouseover", (e)=> {e.target.style.backgroundColor = "cyan"});
    row.appendChild(divRow);
  }
}
