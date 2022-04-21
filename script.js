const quadroDePintura = document.getElementById('pixel-board');

function firstFrame(num) {
  if (num > 50) {
    num = 50;
  }
  if (num < 5) {
    num = 5;
  }
  for (let i = 0; i < num; i += 1) {
    const linhaDePintura = document.createElement('div');
    linhaDePintura.className = 'linha';
    quadroDePintura.appendChild(linhaDePintura);

    for (let j = 0; j < num; j += 1) {
      const pixelDePintura = document.createElement('div');
      pixelDePintura.className = 'pixel';
      linhaDePintura.appendChild(pixelDePintura);
    }
  }
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

document.querySelector('#change-color').addEventListener('click', changeColor);

function resetColor() {
  document.querySelector('#color1').style.backgroundColor = 'red';
  document.querySelector('#color2').style.backgroundColor = 'green';
  document.querySelector('#color3').style.backgroundColor = 'blue';
}

document.querySelector('#reset-color').addEventListener('click', resetColor);

document.querySelector('#generate-board').addEventListener('click', createFrame);

function createFrame() {
  const number = document.querySelector('#board-size').value;
  if(number !== '') {
    // const newFrame = document.createElement('div');
    /*newFrame.className = 'pixel-board';*/
    //document.getElementById('corpo-sessao').appendChild(newFrame);
    document.querySelector('#pixel-board').textContent = '';
    firstFrame(number);
  } else {
    return alert('Board inválido!');
  }
}
