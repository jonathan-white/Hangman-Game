game_object.items = [
	{ "name": "metroid", "image": "metroid.png" },
	{ "name": "samus", "image": "samus.png" },
	{ "name": "mother brain", "image": "MotherBrain_drool.gif" },
	{ "name": "ridley", "image": "ridley.jpg" },
	{ "name": "chozo", "image": "chozo.jpg" },
	{ "name": "metroid prime", "image": "Metroidprime4.jpg" }
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

	game_object.pop_sound = new Audio('assets/audio/Seedling_4.wav');
	// Detect mouse clicks
	metroid.addEventListener('mousedown', function(e){
		game_object.pop_sound.play();
		// Pop the metroid and display '+100' score
		game_object.increaseScore(100);
		this.classList.add("score");

		// Destroy score
		setTimeout(function() {
			metroid.remove();
		}, 1000);
	});

	// Detect touch (mobile)
	metroid.addEventListener('touchstart', function(e){
		e.preventDefault();
		var touch = e.touches;
		game_object.pop_sound.play();
		// Pop the metroid and display '+100' score
		game_object.increaseScore(100);
		this.classList.add("score");

		// Destroy score
		setTimeout(function() {
			metroid.remove();
		}, 1000);
	});


	document.body.appendChild(metroid);
};

game_object.metroid_launcher();

game_object.bgvideo = document.getElementById('bg-video');

game_object.video_start = function(){
	game_object.bgvideo.play();	
};
game_object.video_pause = function(){};

game_object.video_start();

game_object.score = 0;
game_object.increaseScore = function(amount){
	game_object.score += amount;
	var player_score = document.getElementsByClassName("scoreholder")[0];
	player_score.style.display = 'inline-block';
	player_score.textContent = "Score: " + game_object.score;
};

game_object.trailer_stop();