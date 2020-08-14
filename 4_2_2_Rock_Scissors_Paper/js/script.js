const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
console.log(player,computer);
// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
let score = player - computer;
//console.log(score);


if (score == 0) {
  console.log('draw game');  
} else if (score == -1 || score == 2) {
  console.log('player win');
} else {
  console.log('computer win');  
}


