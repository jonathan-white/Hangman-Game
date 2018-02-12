game_object.items = [
	{ 
		"name": "black panther", 
		"image": "black_panther.jpg", 
		"trailer": "https://www.youtube.com/embed/xjDjIWPwcPU?autoplay=1&loop=1&playlist=xjDjIWPwcPU" 
	},
	{ 
		"name": "venom", 
		"image": "venom.jpg", 
		"trailer": "https://www.youtube.com/embed/dzxFdtWmjto?autoplay=1&start=7&loop=1&playlist=dzxFdtWmjto" 
	},
	{ 
		"name": "solo", 
		"image": "solo.jpg", 
		"trailer": "https://www.youtube.com/embed/dNW0B0HsvVs?autoplay=1&loop=1&playlist=dNW0B0HsvVs" 
	},
	{ 
		"name": "annihilation", 
		"image": "annihilation.jpg", 
		"trailer": "https://www.youtube.com/embed/89OP78l9oF0?autoplay=1&loop=1&playlist=89OP78l9oF0" 
	},
	{ 
		"name": "tomb raider", 
		"image": "tomb_raider.jpg", 
		"trailer": "https://www.youtube.com/embed/3KkhD0MnaJU?autoplay=1&loop=1&playlist=3KkhD0MnaJU" 
	},
	{ 
		"name": "avengers: infinity war", 
		"image": "infinity_war.jpg", 
		"trailer": "https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&loop=1&playlist=6ZfuNTqbHE8" 
	},
	{ 
		"name": "pacific rim uprising", 
		"image": "pacific_rim_uprising.jpg", 
		"trailer": "https://www.youtube.com/embed/fUjicxMPDzs?autoplay=1&start=6&loop=1&playlist=fUjicxMPDzs" 
	},
	{ 
		"name": "ready player one", 
		"image": "rpo.jpg", 
		"trailer": "https://www.youtube.com/embed/cSp1dM2Vj48?autoplay=1&loop=1&playlist=cSp1dM2Vj48" 
	},
	{ 
		"name": "rampage", 
		"image": "rampage.jpg", 
		"trailer": "https://www.youtube.com/embed/coOKvrsmQiI?autoplay=1&loop=1&playlist=coOKvrsmQiI" 
	},
	{ 
		"name": "jurassic world: fallen kingdom", 
		"image": "jurassic_world.jpg", 
		"trailer": "https://www.youtube.com/embed/NooW_RbfdWI?autoplay=1&loop=1&playlist=NooW_RbfdWI" 
	},
	{ 
		"name": "deadpool 2", 
		"image": "deadpool2.jpg", 
		"trailer": "https://www.youtube.com/embed/xZNBFcwd7zc?autoplay=1&loop=1&playlist=xZNBFcwd7zc" 
	},
	{ 
		"name": "ant-man and the wasp", 
		"image": "ant-man_wasp.jpg", 
		"trailer": "https://www.youtube.com/embed/8_rTIAOohas?autoplay=1&loop=1&playlist=8_rTIAOohas" 
	},
	{ 
		"name": "a wrinkle in time", 
		"image": "wrinkle.jpg", 
		"trailer": "https://www.youtube.com/embed/UhZ56rcWwRQ?autoplay=1&loop=1&playlist=UhZ56rcWwRQ" 
	},
	{ 
		"name": "red sparrow", 
		"image": "red_sparrow.jpg", 
		"trailer": "https://www.youtube.com/embed/PmUL6wMpMWw?autoplay=1&loop=1&playlist=PmUL6wMpMWw" 
	},
	{ 
		"name": "mission: impossible - fallout", 
		"image": "mi_fallout.jpg", 
		"trailer": "https://www.youtube.com/embed/wb49-oV0F78?autoplay=1&start=6&loop=1&playlist=wb49-oV0F78" 
	}
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

game_object.bgvideo = document.getElementById('bg-video');
game_object.video_start = function(){};
game_object.video_pause = function(){
	game_object.bgvideo.pause();	
};

game_object.video_pause();
game_object.close_curtains();
game_object.hide_score();


game_object.preview = document.getElementById('preview');
game_object.trailer_start = function() {
	game_object.toggle_image("hide");
	game_object.preview.setAttribute("src", game_object.current_item.trailer);
};

game_object.trailer_stop = function() {
	game_object.preview.setAttribute("src", "");
};