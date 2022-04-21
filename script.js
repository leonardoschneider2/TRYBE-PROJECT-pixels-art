let quadroDePintura = document.getElementById('pixel-board');

for (let i = 0; i < 5; i += 1) {
  const linhaDePintura = document.createElement('div');
  linhaDePintura.className = 'linha';
  quadroDePintura.appendChild(linhaDePintura);

  for (let j = 0; j < 5; j += 1) {
    const pixelDePintura = document.createElement('div');
    pixelDePintura.className = 'pixel';
    linhaDePintura.appendChild(pixelDePintura);
  }
}

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

function colorPaint (event) {
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
