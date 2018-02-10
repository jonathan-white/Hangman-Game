game_object.items = [
	{ name: "metroid", image: "metroid.png" },
	{ name: "samus", image: "samus.jpg" },
	{ name: "mother brain", image: "MotherBrain_drool.gif" },
	{ name: "ridley", image: "ridley.jpg" },
	{ name: "chozo", image: "chozo.jpg" }
];

game_object.title = "Metroid";
game_object.subtitle = "Can you guess the Metroid character?";
game_object.item_type = "Character";

game_object.gen_rand_sound = function(){};

game_object.win_sound = new Audio('assets/audio/SamusShip_6.wav');

// Hide the image from the previous theme
game_object.toggle_image("hide");

game_object.update_text("transition");
game_object.game_start();

// game_object.update_image = function(result){};

game_object.metroid_launcher = function(){
	var metroid_holder = document.createElement("div");
	metroid_holder.className = 'metroid delay-' + Math.floor(Math.random()*10) + ' pos-' + Math.floor(Math.random()*3);
	document.body.appendChild(metroid_holder);
};

game_object.metroid_launcher();

