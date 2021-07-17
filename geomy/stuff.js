var canvas = document.getElementById('game');
var game = canvas.getContext('2d');

player = {
	x: 300,
	y: 500,
	mass: 20,
};

var playerimg = new Image();
playerimg.src = 'media/circle.png';
playerimg.addEventListener('load', function() {
	game.drawImage(playerimg, player.x, player.y, player.mass * 6.4, player.mass * 6.4);
}, false);