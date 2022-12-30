// botão para mudar o tamanho do quadro
const buttonSetSize = () => {
  const divButton = document.getElementById('div-2');
  const getInput = document.getElementById('board-size');

  const setSize = document.createElement('button');
  divButton.appendChild(setSize);
  setSize.id = 'generate-board';
  setSize.innerHTML = 'VQV';
  const cssButton = setSize.style;
  cssButton.display = 'flex';
  setSize.addEventListener('click', () => {
    if (getInput.value <= 0 || getInput.value > 50) alert('Board inválido!');
    // else mult();
  });
};