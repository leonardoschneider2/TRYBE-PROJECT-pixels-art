let quadroDePintura = document.getElementById('pixel-board');

for (let i = 0; i < 5; i += 1) {
  const linhaDePintura = document.createElement('div');
  linhaDePintura.className = 'linha';
  quadroDePintura.appendChild(linhaDePintura);

  for (let j = 0; j < 5; j += 1) {
    const celulaDePintura = document.createElement('div');
    celulaDePintura.className = 'celula';
    linhaDePintura.appendChild(celulaDePintura);
  }
}
