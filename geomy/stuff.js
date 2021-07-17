var canvas = document.getElementById('game');
var game = canvas.getContext('2d');

player = {
	x: 300,
	y: 500,
	mass: 20,
};

gameLoop = setInterval(() => {
	game.clearRect(0, 0, canvas.width, canvas.height);
	render();
	player.y--;
}, 1000 / config.FRAMERATE);

function render() {
	var circle = new Image();
	circle.src = 'media/circle.png';
	circle.addEventListener('load', function() {
		game.drawImage(circle, player.x, player.y, player.mass * 6.4, player.mass * 6.4);
	}, false);
};