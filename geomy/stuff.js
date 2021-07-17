var canvas = document.getElementById('game');
var game = canvas.getContext('2d');

var circle = new Image();

player = {
	x: 300,
	y: 500,
	mass: 20,
	tier: 'circle',
};

gameLoop = setInterval(() => {
	render();
	player.y -= tiers[player.tier].speed;
}, 1000 / config.FRAMERATE);

function render() {
	circle.src = 'media/circle.png';
	circle.addEventListener('load', function() {
		game.clearRect(0, 0, canvas.width, canvas.height);
		game.drawImage(circle, player.x, player.y, player.mass * 6.4, player.mass * 6.4);
	}, false);
};