game_object.items = [
	{ "name": "black panther", "image": "black_panther.jpg" },
	{ "name": "venom", "image": "venom.jpg" },
	{ "name": "solo", "image": "solo.jpg" },
	{ "name": "annihilation", "image": "annihilation.jpg" },
	{ "name": "tomb raider", "image": "tomb_raider.jpg" },
	{ "name": "avengers: infinity war", "image": "infinity_war.jpg" },
	{ "name": "pacific rim uprising", "image": "pacific_rim_uprising.jpg" },
	{ "name": "ready player one", "image": "rpo.jpg" },
	{ "name": "rampage", "image": "rampage.jpg" }
];

game_object.title = "Movies";
game_object.subtitle = "2018 Blockbusters";
game_object.item_type = "Movie";

game_object.gen_rand_sound = function(){
	var applause = ["applause-1","applause-2","applause-3"];
	var rand_applause = applause[Math.floor(Math.random()*applause.length)];
	game_object.win_sound = new Audio('assets/audio/'+ rand_applause +'.mp3');
};

game_object.gen_rand_sound();

// Hide the image from the previous theme
game_object.toggle_image("hide");

game_object.update_text("transition");
game_object.game_start();

// game_object.update_image = function(result){};

game_object.metroid_launcher = function(){};
game_object.destroy_metroid = function(){};

game_object.bgvideo = document.getElementById('bg-video');
game_object.video_start = function(){};
game_object.video_pause = function(){
	game_object.bgvideo.pause();	
};

game_object.video_pause();


game_object.open_curtains = function(){
	var curtains = document.getElementsByClassName("curtain");
	for (var i = 0; i < curtains.length; i++) {
		curtains[i].classList.add("open");
	}
};

game_object.close_curtains = function(){
	var curtains = document.getElementsByClassName("curtain");
	for (var i = 0; i < curtains.length; i++) {
		curtains[i].classList.remove("open");
	}
};