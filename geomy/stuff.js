var canvas = document.getElementById('game');
var game = canvas.getContext('2d');

var circle = new Image();

player = {
	x: 300,
	y: 500,
	mass: 20,
	tier: 'circle',
};
mouse = {
	x: 0,
	y: 0,
}

canPaint = [false];

readyLoop = setInterval(() => {
	ready();
}, 1000 / config.FRAMERATE);

gameLoop = setInterval(() => {
	if (canPaint.every(a => a == true)) render();
}, 1000 / config.FRAMERATE);

window.addEventListener('mousemove', function (e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
})

function ready() {
	circle.src = 'media/circle.png';
	circle.addEventListener('load', function() {
		canPaint[0] = true;
	}, false);
};
function render() {
	game.clearRect(0, 0, canvas.width, canvas.height);

	game.drawImage(circle, player.x, player.y, player.mass * 6.4, player.mass * 6.4);
	player.y -= tiers[player.tier].speed;
}