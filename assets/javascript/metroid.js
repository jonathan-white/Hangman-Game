game_object.items = [
	{ name: "metroid", image: "metroid.png" },
	{ name: "samus", image: "samus.jpg" },
	{ name: "mother brain", image: "MotherBrain_drool.gif" },
	{ name: "ridley", image: "ridley.jpg" },
	{ name: "chozo", image: "chozo.jpg" }
];
game_object.title = "Can you guess the Metroid character?";
game_object.item_type = "Character";

game_object.win_sound = new Audio('assets/audio/SamusShip_6.wav');

game_object.game_start();
