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
	var metroid = document.createElement("div");
	metroid.className = 'metroid delay-' + Math.floor(Math.random()*10) + ' pos-' + Math.floor(Math.random()*3);
	// document.body.appendChild(metroid);

	// Detect mouse clicks
	metroid.addEventListener('mousedown', function(e){
		console.log(e.clientX + " - " + e.clientY);
		// Pop the metroid and display '+100' score
		this.classList.add("score");

		// Destroy score
		setTimeout(function() {
			console.log(metroid);
			metroid.remove();
		}, 1000);

		// game_object.destroy_metroid();
	});

	// Detect touch
	metroid.addEventListener('touchstart', function(e){
		var touch = e.touches[0];
		console.log(touch.pageX + " - " + touch.pageY);

		// Pop the metroid and display '+100' score
		this.classList.add("score");

		// Destroy score
		setTimeout(function() {
			console.log(metroid);
			metroid.remove();
		}, 1000);
	});


	document.body.appendChild(metroid);
};
game_object.metroid_launcher();

game_object.destroy_metroid = function(){

};

game_object.bgvideo = document.getElementById('bg-video');

game_object.video_start = function(){
	game_object.bgvideo.play();	
};
game_object.video_pause = function(){};

game_object.video_start();
