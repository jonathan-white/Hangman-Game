game_object.items = [
	{ name: "biscotti", image: "biscotti.jpg" },			//# of Repeat letters: 2
	{ name: "macaron", image: "macaron.jpg" },				//# of Repeat letters: 1
	{ name: "oatmeal", image: "oatmeal.jpg" },				//# of Repeat letters: 1
	{ name: "chocolate chip", image: "chocolate chip.jpg" },//# of Repeat letters: 4
	{ name: "fortune", image: "fortune.jpg" },				//# of Repeat letters: 0
	{ name: "oreo", image: "oreo.jpg" },					//# of Repeat letters: 1
	{ name: "peanut butter", image: "peanut butter.jpg" },	//# of Repeat letters: 4
	{ name: "snickerdoodle", image: "snickerdoodle.jpg" },	//# of Repeat letters: 3
	{ name: "cutout", image: "cutout.jpg" },				//# of Repeat letters: 2
	{ name: "sugar", image: "sugar.jpg" },					//# of Repeat letters: 0
	{ name: "peppermint", image: "peppermint.jpg" }			//# of Repeat letters: 3
];
game_object.title = "Can you guess the type of cookie?";
game_object.item_type = "Cookie";

game_object.win_sound = new Audio('assets/audio/Bite-Sound.mp3');

// Hide the image from the previous theme
game_object.toggle_image("hide");

game_object.update_text("transition");
game_object.game_start();
