/* eslint-disable complexity */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable max-lines-per-function */
const quadroDePintura = document.getElementById('pixel-board');

function firstFrame(num) {
  let number = num;
  if (number > 50) {
    number = 50;
  }
  if (number < 5) {
    number = 5;
  }
  for (let i = 0; i < number; i += 1) {
    const linhaDePintura = document.createElement('div');
    linhaDePintura.className = 'linha';
    quadroDePintura.appendChild(linhaDePintura);
    for (let j = 0; j < number; j += 1) {
      const pixelDePintura = document.createElement('div');
      pixelDePintura.className = 'pixel';
      linhaDePintura.appendChild(pixelDePintura);
    }
  }
}

function changeColor() {
  function aleColor() {
    return Math.floor(Math.random() * 255);
  }
  const colorPalette = document.querySelectorAll('.color');
  for (let i = 1; i < colorPalette.length; i += 1) {
    const back = `RGB(${aleColor()}, ${aleColor()}, ${aleColor()})`;
    colorPalette[i].style.backgroundColor = back;
    colorPalette[i].innerHTML = `<p>${back}</p>`;
  }
}

// eslint-disable-next-line max-lines-per-function
function createInputNumberPalette() {
  const pai = document.querySelector('.cabecalho-number-lines');
  const label = document.createElement('label');
  label.textContent = 'Quantidade de Paletas';
  label.id = 'label-number-palette';
  const input = document.createElement('input');
  input.type = 'number';
  input.min = '1';
  input.value = '';
  input.id = 'number-palette';
  input.className = 'inputo';
  const button = document.createElement('button');
  button.className = 'but';
  button.id = 'generate-palette';
  button.textContent = 'VQV';
  label.appendChild(input);
  label.appendChild(button);
  label.for = 'number-palette';

  pai.appendChild(label);

  document.querySelector('#generate-palette').addEventListener('click', createNewPalette);

}

// eslint-disable-next-line max-lines-per-function
function createPalette(num) {
  const palette = document.querySelector('#color-palette');
  palette.textContent = '';
  for (let i = 0; i < num; i += 1) {
    const color = document.createElement('div');
    if (i === 0) {
      color.className = 'color selected';
      color.id = 'color0';
      palette.appendChild(color);
      color.innerHTML = '<p>RGB(0, 0, 0)</p>';
    } else {
      color.className = 'color';
      palette.appendChild(color);
    }
  }
  changeColor();
  createInputNumberPalette();
}

function colorSelect(event) {
  document.querySelector('#erase').classList.remove('selected');
  console.log(event.target);
  let whoWasClicked = event.target;
  if (whoWasClicked === document.querySelector('#erase')) {
    whoWasClicked.className += ' selected';
    const colors = document.querySelectorAll('.color');
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove('selected');
    }
  } else {
    const fatherWhoWasClicked = event.currentTarget;
    const classParent = whoWasClicked.parentNode.className.split(' '); // separa a primeira classe do pai
    if (classParent[0] === 'color') { // se for a classe do pai for color, significa que clicamos no parágrafo
      whoWasClicked = event.target.parentNode; // alteramos o valor de whoWasClicked do parágrafo para a div que queremos
    }
    if (whoWasClicked !== fatherWhoWasClicked) {
      const colors = document.querySelectorAll('.color');
      for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove('selected');
      }
      whoWasClicked.className += ' selected';
    }
  }
}

function colorPaint(event) {
  const whoWasClicked = event.target;
  const fatherWhoWasClicked = event.currentTarget;
  if (whoWasClicked !== fatherWhoWasClicked) {
    const colorSelected = document.querySelector('.selected');
    const classe = colorSelected.className.split(' ');
    console.log(classe);
    if (classe[0] === 'color') {
      const backg = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
      whoWasClicked.style.backgroundColor = backg;
    } else {
      whoWasClicked.style.backgroundColor = 'white';
    }
  }
}

function eraseAll() {
  const quadroDePixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < quadroDePixels.length; i += 1) {
    quadroDePixels[i].style.backgroundColor = 'white';
  }
}

function createFrame() {
  const number = document.querySelector('#board-size').value;
  if (number !== '') {
    document.querySelector('#pixel-board').textContent = '';
    firstFrame(number);
  } else {
    return alert('Board inválido!');
  }
}

function createNewPalette() {
  const number = document.querySelector('#number-palette').value;
  if (number !== '') {
    const a = document.querySelector('#label-number-palette');
    a.parentNode.removeChild(a);
    createPalette(number);
  } else {
    return alert('Board inválido!');
  }
}

function removeBorder() {
  const a = document.querySelectorAll('.pixel');
  
  for (let i = 0; i < a.length; i += 1) {
    if (a[i].style.border !== 'none') {
      a[i].style.border = 'none';
    } else {
      a[i].style.border = '1px solid black';
    }
  }
}

firstFrame(5);
createPalette(4);

document.querySelector('#generate-board').addEventListener('click', createFrame);

document.querySelector('#erase').addEventListener('click', colorSelect);

document.querySelector('#clear-board').addEventListener('click', eraseAll);

document.querySelector('#change-color').addEventListener('click', changeColor);

document.querySelector('#pixel-board').addEventListener('click', colorPaint);

document.querySelector('#color-palette').addEventListener('click', colorSelect);

document.querySelector('#remove-board').addEventListener('click', removeBorder);
