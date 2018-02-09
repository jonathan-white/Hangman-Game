var game_object = {
	title: "",
	item_type: "",
	num_wins: 0,
	current_item: "",
	remaining_guesses: 12,
	letters_guessed: 0,
	correct_guesses: 0,
	correct_letters: [],
	guessed_letters:[],
	items: [
		{ name: "biscotti", image: "biscotti.jpg" },
		{ name: "macaron", image: "macaron.jpg" },
		{ name: "oatmeal", image: "oatmeal.jpg" },
		{ name: "chocolate chip", image: "chocolate chip.jpg" },
		{ name: "fortune", image: "fortune.jpg" },
		{ name: "oreo", image: "oreo.jpg" },
		{ name: "peanut butter", image: "peanut butter.jpg" },
		{ name: "snickerdoodle", image: "snickerdoodle.jpg" },
		{ name: "cutout", image: "cutout.jpg" },
		{ name: "peppermint", image: "peppermint.jpg" }
	],
	victory: false,
	win_sound: new Audio('assets/audio/Bite-Sound.mp3'),
	game_start: function (){
		game_object.letters_guessed = 0;
		game_object.correct_guesses = 0;
		game_object.victory = false;
		game_object.guessed_letters = [];
		game_object.correct_letters = [];

		// Select a random word from the list
		var random = Math.floor(Math.random()*game_object.items.length); 
		game_object.current_item = game_object.items[random];

		// Update the number of remaining guesses
		game_object.remaining_guesses = game_object.current_item.name.length + 6;
		game_object.update_text();

		// update #word-showing with the number of letters for the selected word
		$('#word-showing').empty();
		var letter_field;
		for (i=0; i < game_object.current_item.name.length; i++){
			letter_field = '<li id="letter-'+ i +'" class="output">_</li>';
			$('#word-showing').append(letter_field);
		}

		//If the chosen word contains a space, display the space
		if (game_object.current_item.name.includes(" ")){
			for (var i=0; i < game_object.current_item.name.length; i++){
				if (!game_object.correct_letters.includes(i) && game_object.current_item.name[i] == " ") {
					game_object.correct_letters.push(i); 
					document.getElementById('letter-' + i).textContent = " ";
				}
			}		
		}
	}, 
	check_outcome: function(){
		if (game_object.remaining_guesses === 0) {
			// Player Loses
			game_object.update_text("loss");

			//remove/replace the displayed image
			var showcase = document.getElementsByClassName('showcase')[0];
			var image = showcase.getElementsByTagName('img')[0];
			image.style.display = "none";

			// Restart the game
			game_object.game_start();
		}else if (game_object.victory) {
			// Player Wins
			game_object.num_wins++;
			game_object.win_sound.play();
			game_object.update_text("win");

			// Display the image
			var showcase = document.getElementsByClassName('showcase')[0];
			var image = showcase.getElementsByTagName('img')[0];
			image.style.display = "block";
			image.setAttribute("src", "assets/images/"+ game_object.current_item.image);
			image.setAttribute("alt", game_object.current_item.name);
			game_object.game_start();
		}
	},
	update_text: function(type){
		// var status_title_options = []; 
		switch(type){
			case "transition":
				document.getElementById('page-title').textContent = game_object.title;
				document.getElementById('word-title').textContent = "Current " + game_object.item_type;
				break;
			case "win":
				document.getElementById('status-title').textContent = "Previous "+ game_object.item_type +":";
				document.getElementById('status').textContent = game_object.current_item.name;
				break;
			case "loss":
				document.getElementById('status-title').textContent = "";
				document.getElementById('status').textContent = "Better luck next time...";
				break;
			case "guesses remaining":
				document.getElementById('remaining-guesses').textContent = game_object.remaining_guesses;
				break;
			default: 
				document.getElementById('remaining-guesses').textContent = game_object.remaining_guesses;
				document.getElementById('page-title').textContent = game_object.title;
				document.getElementById('word-title').textContent = "Current " + game_object.item_type;
				// Update the win count
				if(game_object.num_wins === 1)
					document.getElementById('wins').textContent = game_object.num_wins +" Win";
				else
					document.getElementById('wins').textContent = game_object.num_wins +" Wins";
					document.getElementById('guessed').textContent = "";
		}
	},
	clear:function(type){
		document.head.removeChild(document.getElementById(type + "-css"));
		document.body.removeChild(document.getElementById(type + "-js"));
	}
};

document.onkeyup = function(event){
	// If player guesses incorrectly, add to guessed letters and reduce remaining guesses
	var typed_key = event.key.toLowerCase();
	if (!game_object.guessed_letters.includes(typed_key)){
		game_object.letters_guessed++;
		game_object.remaining_guesses--;
		game_object.guessed_letters.push(typed_key);
		document.getElementById('guessed').textContent += typed_key + " ";
	}
	
	// if the player guesses correctly...
	if (game_object.current_item.name.indexOf(typed_key) > -1) {

		// find the index of the letter and reveal the letter 
		for (var i=0; i < game_object.current_item.name.length; i++){
			if (!game_object.correct_letters.includes(i) && game_object.current_item.name[i] == typed_key) {
				game_object.correct_letters.push(i); 
				game_object.correct_guesses++;
				document.getElementById('letter-' + i).textContent = typed_key;
			}
		}

		// if the number of correct guesses matches the number of letters in the word
		// set the victory condition to true
		if (game_object.correct_letters.length === game_object.current_item.name.length){
			game_object.victory = true;
		}
	}

	// Display the number of remaining guesses
	game_object.update_text("guesses remaining");

	// Check if player has won or lost
	game_object.check_outcome();
};


// When user clicks the Cookies Button, change JS and CSS
document.getElementById("style-1").addEventListener("click", function(e){
	console.log('Clicked style-1');
	if(!document.getElementById("cookies-css")){
		var script = document.createElement("script");
		var css = document.createElement("link");

		script.setAttribute("src", "assets/javascript/cookies.js");
		script.id = "cookies-js";

		css.id = "cookies-css";
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("href", "assets/css/cookies.css");

		document.head.appendChild(css);
		document.body.appendChild(script);

		if(!(document.getElementById("movies-css") === null)){
			game_object.clear("movies");
		}

		if(!(document.getElementById("metroid-css") === null)){
			game_object.clear("metroid");
		}

		game_object.game_start();
	}
});

// When user clicks the Movies Button, change JS and CSS
document.getElementById("style-2").addEventListener("click", function(e){
	console.log('Clicked style-2');
	if(!document.getElementById("movies-css")){
		var script = document.createElement("script");
		var css = document.createElement("link");

		script.setAttribute("src", "assets/javascript/movies.js");
		script.id = "movies-js";

		css.id = "movies-css";
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("href", "assets/css/movies.css");

		document.head.appendChild(css);
		document.body.appendChild(script);

		if(!(document.getElementById("cookies-css") === null)){
			game_object.clear("cookies");
		}

		if(!(document.getElementById("metroid-css") === null)){
			game_object.clear("metroid");
		}

		game_object.game_start();
	}
});

// When user clicks the Metroid Button, change JS and CSS
document.getElementById("style-3").addEventListener("click", function(e){
	console.log('Clicked style-3');
	if(!document.getElementById("metroid-css")){
		var script = document.createElement("script");
		var css = document.createElement("link");
		var metroid = document.createElement("div");

		script.setAttribute("src", "assets/javascript/metroid.js");
		script.id = "metroid-js";

		css.id = "metroid-css";
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("href", "assets/css/metroid.css");

		metroid.className = "metroid";

		document.head.appendChild(css);
		document.body.appendChild(script);
		document.body.appendChild(metroid);

		document.getElementById("page-title").textContent = game_object.title;
		document.getElementById("word-title").textContent = "Current " + game_object.item_type;

		if(!(document.getElementById("cookies-css") === null)){
			game_object.clear("cookies");
		}

		if(!(document.getElementById("movies-css") === null)){
			game_object.clear("movies");
		}

		game_object.game_start();
	}
});
