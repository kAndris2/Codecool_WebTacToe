const positions = Array.from(document.querySelectorAll('.col'));

function botTurn()
{
    let availablePositions = positions.filter((p) => p.innerText === '');
    const move = Math.floor(Math.random() * (availablePositions.length - 0));
    availablePositions[move].innerText = 'O';
    checkWinner();

}

function humanTurn ()
{
    event.target.innerText = 'X';
    checkWinner();
    botTurn();
}

function checkWinner()
{
    let winner = false;

    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];

    winningCombinations.forEach((winningCombo) => {
      const pos0InnerText = positions[winningCombo[0]].innerText;
      const pos1InnerText = positions[winningCombo[1]].innerText;
      const pos2InnerText = positions[winningCombo[2]].innerText;
      const isWinningCombo = pos0InnerText !== '' &&
        pos0InnerText === pos1InnerText && pos1InnerText === pos2InnerText;
      if (isWinningCombo) {
          winner = true;
          winningCombo.forEach((index) => {
            positions[index].className += ' winner';
          })
      }
    });
}

positions.forEach(pos => pos.addEventListener('click', humanTurn));