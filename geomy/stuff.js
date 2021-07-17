var canvas = document.getElementById('game');
var game = canvas.getContext('2d');

game.beginPath();
game.moveTo(100, 100);
game.lineTo(200, 100);
game.lineTo(100, 200);
game.fill();