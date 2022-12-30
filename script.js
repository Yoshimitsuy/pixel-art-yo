// global const
const body = document.getElementById('body');
const onePixel = document.getElementsByClassName('pixel');
// const pixels2 = document.getElementById('pixel-board');

// função para gerar cores aleatórias (42)
const randomColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const makeTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Bebel e Laurinha';
  body.appendChild(title);
  title.style.textAlign = 'center';
  title.style.margin = '5px';
  // title.style.border = '2px solid yellow';
};

// div que engloba a paleta
const boardColor = () => {
  const colorPalette = document.createElement('div');
  colorPalette.id = 'color-palette';
  // colorPalette.style.border = '2px solid red';
  colorPalette.style.display = 'flex';
  colorPalette.style.justifyContent = 'center';
  colorPalette.style.margin = '2px';
  body.appendChild(colorPalette);
};

// botão ramdon colors
const buttonRandomColors = () => {
  const divButton = document.getElementById('div-2');

  const colorsButton = document.createElement('button');
  divButton.appendChild(colorsButton);
  colorsButton.id = 'random-colors';
  colorsButton.innerHTML = 'randon colors';
  const cssButton = colorsButton.style;
  cssButton.display = 'flex';
};

// botão reset board
const buttonResetBoard = () => {
  const divButton = document.getElementById('div-2');

  const resetButton = document.createElement('button');
  divButton.appendChild(resetButton);
  resetButton.id = 'clear-board';
  resetButton.innerHTML = 'clear board';
  const cssButton = resetButton.style;
  cssButton.display = 'flex';
};

// div que engloba o botão
const div2Button = () => {
  const div = document.createElement('div');
  div.id = 'div-2';
  const cssDiv = div.style;
  cssDiv.display = 'flex';
  cssDiv.justifyContent = 'center';
  // cssDiv.border = '1px solid green';
  cssDiv.margin = '2px';
  body.appendChild(div);
  buttonRandomColors();
  buttonResetBoard();
};

// sempre deixa o primeiro pixel sendo preto
const blackAndColors = () => {
  const getClassColor = document.getElementsByClassName('color');
  // console.log(getClassColor[0]);
  for (let i = 0; i < getClassColor.length; i += 1) {
    if (i === 0) {
      getClassColor[i].style.backgroundColor = 'black';
      getClassColor[i].className = 'color selected';
      
    } else if (i === 1) {
      getClassColor[i].style.backgroundColor = 'white';
    } else {
      getClassColor[i].style.backgroundColor = randomColors();
    }
  }
};

// 4 cores
const makePalette = () => {
  const getPalette = document.getElementById('color-palette');
  for (let i = 0; i < 20; i += 1) {
    const colors = document.createElement('div');
    getPalette.appendChild(colors);
    colors.className = 'color';
    const makePaletteCSS = colors.style;
    makePaletteCSS.border = 'solid 1.5px black';
    makePaletteCSS.width = '50px';
    makePaletteCSS.height = '50px';
    makePaletteCSS.margin = '2px';
  }
};

// colocar a classe .selected na cor escolhida
const select = (e) => {
  const selectedColor = document.querySelector('.selected');
  // console.log(e);
  selectedColor.classList.remove('selected');
  e.target.classList.add('selected');
  e.target.style.backgroundColor = onePixel[e];
  console.log(e.target.style.backgroundColor);
  console.log(e.target);
};

const setColor = () => {
  const colors = document.getElementsByClassName('color');
  console.log('func setColor');
  for (let i = 0; i < 20; i += 1) {
    colors[i].id = `id-${i + 1}`;
    colors[i].addEventListener('click', select);
  }
};

const pinta = () => {
  // const selectedColor = document.querySelector('.selected');
  for (let i = 0; i < onePixel.length; i += 1) {
    onePixel[i].addEventListener('click', (e) => {
      const selectedColor = document.querySelector('.selected');
      e.target.style.backgroundColor = selectedColor.style.backgroundColor;
      console.log('func pinta essa porra');
      console.log(e.target);
    });
  }
};

// 25 divs independentes
const board25Pixels = () => {
  const pixels = document.getElementById('pixel-board');

  for (let i = 0; i < 390; i += 1) {
    const pixel = document.createElement('div');
    pixels.appendChild(pixel);
    pixel.className = 'pixel';
    const css25 = pixel.style;
    css25.backgroundColor = 'white';
    css25.border = 'solid 1px black';
    css25.width = '25px';
    css25.height = '25px';
  }
};

// div que engloba os 25 pixels
const divBoard = () => {
  const board = document.createElement('div');
  body.appendChild(board);
  board.id = 'pixel-board';
  const cssBoard = board.style;
  // cssBoard.border = 'solid 2px purple';
  cssBoard.display = 'flex';
  cssBoard.margin = '2px';
  cssBoard.flexWrap = 'wrap';
  cssBoard.justifyContent = 'center';
  cssBoard.padding = '10px 10px';
  board25Pixels();
};

// evento do botão random colors
const randomColorsClick = () => {
  const cleanButton = document.getElementById('random-colors');
  cleanButton.addEventListener('click', blackAndColors);
};

const resetClick = () => {
  for (let i = 0; i < onePixel.length; i += 1) {
    if (onePixel[i].className === 'pixel') {
      onePixel[i].style.backgroundColor = 'white';
    }
    // onePixel[i].id = 'white';
    // onePixel[i].style.backgroundColor = 'rgb(0, 255, 255)';
    console.log(`func resetClick ${onePixel}`);
  }
};

const clearClick = () => {
  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', resetClick);
};

window.onload = () => {
  makeTitle();
  boardColor();
  div2Button();
  makePalette();
  setColor();
  blackAndColors();
  divBoard();
  randomColorsClick();
  clearClick();
  pinta();
};
