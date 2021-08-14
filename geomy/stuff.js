var canvas = document.getElementById('game');
var game = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var circle = new Image();

// set the player's stats
player = {
	x: 300,
	y: 300,
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
// every frame
function init() {
	circle.src = 'media/circle.png';
	game.clearRect(0, 0, canvas.width, canvas.height);

	player.x += (((average([player.x, mouse.x, mouse.x, mouse.x, mouse.x]) - player.x) / 200 ) * tiers[player.tier].speed);
	player.y += (((average([player.y, mouse.y, mouse.y, mouse.y, mouse.y]) - player.y) / 200 ) * tiers[player.tier].speed);

	player.x = Math.max(64, player.x);
	player.x = Math.min(canvas.width - 64, player.x);
	player.y = Math.max(64, player.y);
	player.y = Math.min(canvas.height - 64, player.y);

	game.drawImage(circle, player.x - player.mass * 3.2, player.y - player.mass * 3.2, player.mass * 6.4, player.mass * 6.4);
	requestAnimationFrame(init);
}