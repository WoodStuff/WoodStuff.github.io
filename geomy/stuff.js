var canvas = document.getElementById('game');
var game = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

canvas.addEventListener('mousemove', mousepos, false);

function mousepos(e) {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
}
function init() {
	circle.src = 'media/circle.png';
	game.clearRect(0, 0, canvas.width, canvas.height);

	player.x = mouse.x - player.mass * 3.2;
	player.y = mouse.y - player.mass * 3.2;

	game.drawImage(circle, player.x, player.y, player.mass * 6.4, player.mass * 6.4);
	requestAnimationFrame(init);
	player.y -= tiers[player.tier].speed;
}