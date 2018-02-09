var remaining_guesses = 12;
var letters_guessed = 0;
var correct_guesses = 0;
var num_wins = 0;
var correct_letters = [];
var guessed_letters = new Array();
var current_word;
var victory = false;

// Array of words to choose from
var word_list = 
	[
		"biscotti","macaron", "oatmeal","chocolate chip","fortune","oreo","peanut butter",
		"snickerdoodle", "cutout", "peppermint"
	];

document.addEventListener("keyup", function(event) {

	if (!already_guessed(event.key)){
		letters_guessed++;
		remaining_guesses--;
		guessed_letters.push(event.key);
		document.getElementById('guessed').textContent += event.key + " ";
	}
	
	if (current_word.indexOf(event.key) > -1) {

		for (var i=0; i < current_word.length; i++){
			if (!correct_letters.includes(i) && current_word[i] == event.key) {
				correct_letters.push(i); 
				correct_guesses++;
				document.getElementById('letter-' + i).textContent = event.key;
			}
		}

		if (correct_letters.length === current_word.length){
			victory = true;
		}
	}

	document.getElementById('remaining-guesses').textContent = remaining_guesses;

	if (remaining_guesses === 0) {
		document.getElementById('status-title').textContent = "";
		document.getElementById('status').textContent = "Better luck next time...";
		initialize_game();
	}else if (victory) {
		num_wins++;
		document.getElementById('status-title').textContent = "Previous Cookie:";
		document.getElementById('status').textContent = current_word;

		$('.img-holder img').attr("src","assets/images/"+ current_word +".jpg");
		initialize_game();
	}
});

function already_guessed(e) {
	if (guessed_letters.includes(e))
		return true;
	else
		return false;
};

function initialize_game(){
	letters_guessed = 0;
	correct_guesses = 0;
	victory = false;
	guessed_letters = [];
	correct_letters = [];
	document.getElementById('wins').textContent = num_wins +" Wins";
	document.getElementById('guessed').textContent = "";

	var random = Math.floor(Math.random()*word_list.length);
	console.log(random);

	// Select a random word from the list
	current_word = word_list[random];

	// Update the number of remaining guesses
	remaining_guesses = (current_word.length * 2) - 1
	document.getElementById('remaining-guesses').textContent = remaining_guesses;

	// update word-showing with the number of letters for the selected word
	$('#word-showing').empty();
	var letter_field;
	for (i=0; i < current_word.length; i++){
		letter_field = '<li id="letter-'+ i +'" class="output">_</li>';
		$('#word-showing').append(letter_field);
	}
}