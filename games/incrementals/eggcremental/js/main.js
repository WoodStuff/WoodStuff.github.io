/**
 * The player.
 */
let game = new Player();

function start() {
	save();
	load();
	console.log(game);
}
game.letters.a