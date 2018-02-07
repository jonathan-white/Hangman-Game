var game_object = {
	num_wins: 0,
	current_word: "",
	remaining_guesses: 12,
	letters_guessed: 0,
	correct_guesses: 0,
	correct_letters: [],
	guessed_letters:[],
	word_list: ["biscotti","macaron", "oatmeal","chocolate chip","fortune","oreo","peanut butter",
		"snickerdoodle", "cutout", "peppermint"],
	victory: false,
	already_guessed: function already_guessed(e) {
		if (game_object.guessed_letters.includes(e))
			return true;
		else
			return false;
	},
	game_start: function initialize_game(){
		game_object.letters_guessed = 0;
		game_object.correct_guesses = 0;
		game_object.victory = false;
		game_object.guessed_letters = [];
		game_object.correct_letters = [];
		document.getElementById('wins').innerHTML = game_object.num_wins +" Wins";
		document.getElementById('guessed').innerHTML = "";

		var random = Math.floor(Math.random()*game_object.word_list.length);
		console.log(random);

		// Select a random word from the list
		game_object.current_word = game_object.word_list[random];

		// Update the number of remaining guesses
		game_object.remaining_guesses = (game_object.current_word.length * 2) - 1
		document.getElementById('remaining-guesses').innerHTML = game_object.remaining_guesses;

		// update word-showing with the number of letters for the selected word
		$('#word-showing').empty();
		var letter_field;
		for (i=0; i < game_object.current_word.length; i++){
			letter_field = '<li id="letter-'+ i +'" class="output">_</li>';
			$('#word-showing').append(letter_field);
		}
	} 
};


document.addEventListener("keydown", function(event) {

	if (!game_object.already_guessed(event.key)){
		game_object.letters_guessed++;
		game_object.remaining_guesses--;
		game_object.guessed_letters.push(event.key);
		document.getElementById('guessed').innerHTML += event.key + " ";
	}
	
	if (game_object.current_word.indexOf(event.key) > -1) {

		for (var i=0; i < game_object.current_word.length; i++){
			if (!game_object.correct_letters.includes(i) && game_object.current_word[i] == event.key) {
				game_object.correct_letters.push(i); 
				game_object.correct_guesses++;
				document.getElementById('letter-' + i).innerHTML = event.key;
			}
		}

		if (game_object.correct_letters.length === game_object.current_word.length){
			game_object.victory = true;
		}
	}

	document.getElementById('remaining-guesses').innerHTML = game_object.remaining_guesses;

	if (game_object.remaining_guesses === 0) {
		document.getElementById('status-title').innerHTML = "";
		document.getElementById('status').innerHTML = "Better luck next time...";
		game_object.game_start();
	}else if (game_object.victory) {
		game_object.num_wins++;
		document.getElementById('status-title').innerHTML = "Previous Cookie:";
		document.getElementById('status').innerHTML = game_object.current_word;

		$('.img-holder img').attr("src","assets/images/"+ game_object.current_word +".jpg");
		game_object.game_start();
	}
});