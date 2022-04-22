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
    return (Math.random() * 255);
  }
  const back1 = `rgb(${aleColor()}, ${aleColor()}, ${aleColor()})`;
  const back2 = `rgb(${aleColor()}, ${aleColor()}, ${aleColor()})`;
  const back3 = `rgb(${aleColor()}, ${aleColor()}, ${aleColor()})`;

  document.querySelector('#color1').style.backgroundColor = back1;
  document.querySelector('#color2').style.backgroundColor = back2;
  document.querySelector('#color3').style.backgroundColor = back3;
}

firstFrame(5);
changeColor();

function colorSelect(event) {
  const whoWasClicked = event.target;
  const fatherWhoWasClicked = event.currentTarget;
  if (whoWasClicked !== fatherWhoWasClicked) {
    const colors = document.querySelectorAll('.color');
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove('selected');
    }
    whoWasClicked.className += ' selected';
  }
}

document.querySelector('#color-palette').addEventListener('click', colorSelect);

function colorPaint(event) {
  const whoWasClicked = event.target;
  const fatherWhoWasClicked = event.currentTarget;
  if (whoWasClicked !== fatherWhoWasClicked) {
    const colorSelected = document.querySelector('.selected');
    const background = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
    whoWasClicked.style.backgroundColor = background;
  }
}

document.querySelector('#pixel-board').addEventListener('click', colorPaint);

function paintingAllWhite() {
  const quadroDePixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < quadroDePixels.length; i += 1) {
    quadroDePixels[i].style.backgroundColor = 'white';
  }
}

document.querySelector('#clear-board').addEventListener('click', paintingAllWhite);

document.querySelector('#change-color').addEventListener('click', changeColor);

function resetColor() {
  document.querySelector('#color1').style.backgroundColor = 'red';
  document.querySelector('#color2').style.backgroundColor = 'green';
  document.querySelector('#color3').style.backgroundColor = 'blue';
}

document.querySelector('#reset-color').addEventListener('click', resetColor);

function createFrame() {
  const number = document.querySelector('#board-size').value;
  if (number !== '') {
    document.querySelector('#pixel-board').textContent = '';
    firstFrame(number);
  } else {
    return alert('Board inválido!');
  }
}

document.querySelector('#generate-board').addEventListener('click', createFrame);
