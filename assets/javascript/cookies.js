game_object.items = [
	{ name: "biscotti", image: "biscotti.jpg" },
	{ name: "macaron", image: "macaron.jpg" },
	{ name: "oatmeal", image: "oatmeal.jpg" },
	{ name: "chocolate chip", image: "chocolate chip.jpg" },
	{ name: "fortune", image: "fortune.jpg" },
	{ name: "oreo", image: "oreo.jpg" },
	{ name: "peanut butter", image: "peanut butter.jpg" },
	{ name: "snickerdoodle", image: "snickerdoodle.jpg" },
	{ name: "cutout", image: "cutout.jpg" },
	{ name: "sugar", image: "sugar.jpg" },
	{ name: "peppermint", image: "peppermint.jpg" }
];
game_object.title = "Can you guess the type of cookie?";
game_object.item_type = "Cookie";

game_object.win_sound = new Audio('assets/audio/Bite-Sound.mp3');

game_object.update_text("transition");