function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  }
  if (argMoveId == 2) {
    return 'papier';
  }
  if (argMoveId == 3) {
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argPlayerMove == 'nieznany ruch') {
    printMessage('Nieznany ruch gracza!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Remis!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Remis!');
  } else {
    printMessage('Komputer Wygrywa!');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
console.log('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);
