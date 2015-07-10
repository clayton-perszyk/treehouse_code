var questions = [
	["Who wrote the book Catch-22?", "joseph heller"],
	[ "Who was the eldest of the Marx Brothers?", "chico"],
	[ "What type of creature is a dugite?", "snake"],
	[ "What are the first names of English novelist G K Chesterton?", "gilbert keith"],
	[ "In computing what does DMA normally stand for?", "direct memory access"],
	[ "Which vitamin is also known as pantothenic acid?", "b5"],
	[ "A couple celebrating their crystal wedding anniversary have been married for how many years?", "15"]
],
questionsLength = questions.length,
question,
answer,
usersAnswer,
correct = [],
incorrect = [],
score,
minNumTOWin; // Math.round(questionsLength * .80);

function getSkillSetting(questionsArray) {
	var skillLevel = prompt("Set your skill level: easy, medium, hard\n (default is easy)").toLowerCase(),
		desiredLevel;
	if (skillLevel === "hard") {
		desiredLevel = .80;
	} else if (skillLevel === "medium") {
		desiredLevel = .50;
	} else {
		desiredLevel = .20;
	}
	return Math.round(questionsLength * desiredLevel);
}

function setScoreColor(array, min_to_win) {
	var arrayLength = array.length,
	color;

	if (arrayLength >= min_to_win) {
		color = "green"
	} else {
		color = "red";
	}

	return color;
}

function pluralize(listLength, word) {
	if (word) { word = word.toUpperCase(); }

	if (listLength === 1) {
		return (listLength + " ") + (word  || " QUESTION");
	} else {
		return (listLength + " ") + (word  || " QUESTION") + "S";
	}
}

// Can pass in a third arqument to set the element to use for display.
// The argument must be a string that maps to an id in a element (sans #); 
// additionaly, the element must wrap a span.
// (e.g. <h2 id="your_id"><span></span></h2>)
function showBanner(score, correct) {
	var numCorrect = correct.length;
	var id = arguments[2] || 'quiz-response-banner';
	var banner = document.getElementById(id);
	var span = document.querySelector("#" + id + " span");
	span.setAttribute("class", score);
	span.innerHTML = pluralize(numCorrect);
	banner.style.display = "block";
}

function printStats(list, type, outputDiv) {
	var listLength = list.length,
		type = type.toLowerCase();
		html = "<p>You got " + pluralize(listLength, "question") + " " + type + ":</p>";

	if (listLength > 0) {
		html += "<ol>";

		for (var i = 0; i < listLength; i += 1) {
			if (type === "correct") {
				html += "<li class='correct'>" + list[i] + "</li><br />";
			} else {
				html += "<li class='incorrect'>" + list[i] + "</li><br />";
			}
		}

		html += "</ol>";
	} else {
		if (type === "correct") {
			html += "<p class='incorrect'>Bummer none right!</p>";
		} else {
			html += "<p class='correct not-ace'>You are an ace!!!</p>";
		}
			
	}

	output = document.getElementById(outputDiv);
	output.innerHTML = html;
}

function winOrLose(outcome, outputDiv, score) {
	var node = document.createElement('h3'),
	outcome = outcome.toUpperCase(),
	win_lose = document.createTextNode(outcome);
	node.appendChild(win_lose);
	node.setAttribute('class', score);
	document.getElementById(outputDiv).appendChild(node);
	return 0;
}

function normalizeForQuiters(scoreColor, message, selector) {
	document.getElementById("numCorrect").style.color = scoreColor;
 	document.querySelector(selector).innerHTML = message;
}

//----------------------------------//
//								    //
// THE BEGINNING OF RUNNING PROGRAM //
//								    //
//----------------------------------//

minNumToWin = getSkillSetting(questions);

alert("You must get " + minNumToWin + " of " + questionsLength +  " correct to win. Good Luck!")

for (var i = 0; i < questionsLength; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	usersAnswer = prompt(question + "\n(enter 'q' to quit)").toLowerCase();
	if (usersAnswer === 'q') {
		break;
	}

	if (usersAnswer === answer) {
		correct.push(question);
	} else {
		incorrect.push(question);
	}
}

passFail = setScoreColor(correct, minNumToWin);
showBanner(passFail, correct);

if (usersAnswer !== 'q') {	
	printStats(correct, "correct","answeredRight");
	printStats(incorrect, "incorrect","answeredWrong");
	quizOutcome = document.getElementById('quiz-win-or-lose');
	if (correct.length >= minNumToWin && usersAnswer !== 'q') {
		quizOutcome.setAttribute("class", "winner");
		winOrLose("you win!!!", "quiz-response-banner", passFail);
	} else {
		quizOutcome.setAttribute("class", "loser");
		winOrLose("you lose... Walter wins.", "quiz-response-banner", passFail);
	}
 } else {
 	printStats(correct, "correct", "answeredRight");
 	printStats(incorrect, "incorrect", "answeredWrong");
 	normalizeForQuiters("#fff", "No incorrect answers.", ".not-ace");
 }

