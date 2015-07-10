var students = [
	{
	 "name": {first: "joe", last: "palmer"},
	 track: "ruby",
	 achievements: 12,
	 points: 1200
	},
	{
	 "name": {first: "mick", last: "sanchez"},
	 track: "javasript",
	 achievements: 5,
	 points: 120
	},
	{
	 "name": {first: "joan", last: "christenson"},
	 track: "ruby",
	 achievements: 7,
	 points: 500
	},
	{
	 "name": {first: "tony", last: "dellano"},
	 track: "ios",
	 achievements: 17,
	 points: 1500
	},
	{
 	 "name": {first: "lilly", last: "palmer"},
	 track: "design",
	 achievements: 12,
	 points: 800
	}
],
    statsDiv = document.getElementById("student-stats"),
    html = "";


function capitalize(string) {
	var strSplt,
		output = [];

    if (typeof string !== "string") { return string; }

	strSplt = string.split(" ");	

	for (var i = 0; i < strSplt.length; i += 1) {
		output.push(strSplt[i].charAt(0).toUpperCase() + strSplt[i].slice(1));
	}
	return output.join(" ");
}

function showStats(students) {
	for (var i = 0; i < students.length; i += 1) {
	 var student = students[i],
	 	 firsName = capitalize(student["name"].first),
	     value;
	     html += "<h2 class='info'>" + firsName + "'s" + " Info:<h2> <ul>";

	for (var key in student) {
		
		 if (student[key].first) {
	     	value = student[key].first + " " + student[key].last;
	     } else {
	     	value = student[key]
	     }

		html += "<li>" + capitalize(key) + ": " + "<span class='value'>" + capitalize(value) + "</span>" + "</li>";
	}
		html += "</ul>"// html += "<button onclick='addPoints(" + student["points"] + ")'>Add to " + firsName + "'s" + " points " + "</button> </ul>";
	}

	statsDiv.innerHTML = html;
	
	document.getElementById("show").style.visibility = "hidden";
	document.getElementById("find").style.visibility = "hidden";
	document.getElementById("hide").style.visibility = "visible";
	document.getElementById("addPoints").style.visibility = "visible";

	html = "";
	return statsDiv;
}

function hideStats(students) {
	document.getElementById("show").style.visibility = "visible";
	document.getElementById("find").style.visibility = "visible";
	document.getElementById("hide").style.visibility = "hidden";
	document.getElementById("addPoints").style.visibility = "hidden";
	document.getElementById("student-stats").innerHTML = "";
}

function changeStat() {
	var student = prompt("Which student (first and last names)?").toLowerCase(),
		change = prompt("What info would you like to change? (points and achievements add or subtract from total)");
		value = prompt("What should I set " + change + " to?");
	
		for (var i = 0; i < students.length; i += 1) {
			
			if (!students[i].hasOwnProperty(change)) {
				return;
			}

			if (students[i]["name"].first + " " + students[i]["name"].last === student) {
				if (change === "name") {
					newName = value.split(" ");
					students[i]["name"]["first"] = newName[0] || "";
					students[i]["name"]["last"] = newName[1] || "";
					document.getElementById("student-stats").innerHTML = "";
					showStats(students);
					return;
				}
		
				if (parseInt(value)) {
					students[i][change] += parseInt(value);
				} else {
					students[i][change] = value;
				}
				
			}
		}
	document.getElementById("student-stats").innerHTML = "";
	showStats(students);
}


function findStudent(students) {
	var name = prompt("Enter a name: ").toLowerCase(),
	    html = "<h2 class='info'>" + capitalize(name) + "'s " + "Info: </h2><br /> <ul>",
		firstLast = name.split(" "),
		output = "No such student.",
		student;
	
	for (var i = 0; i < students.length; i += 1) {
		 student = students[i]
		if (firstLast[0] === student["name"]["first"] &&
			(firstLast[1] === student["name"]["last"] || undefined)) {
			for (var key in student) {

				 if (student[key].first) {
	     			value = student[key].first + " " + student[key].last;
	   			  } else {
	   			  	value = student[key]
	   			  }

					html += "<li>" + capitalize(key) + ": " + "<span class='value'>" + capitalize(value) + "</span>" + "</li>";	
				}

			document.getElementById("show").style.visibility = "hidden";
			document.getElementById("addPoints").style.visibility = "visible";
			document.getElementById("hide").style.visibility = "visible";
			document.getElementById("find").style.visibility = "hidden";
			document.getElementById("student-stats").innerHTML = "";
			document.getElementById("student-stats").innerHTML = html + "</ul>";
			return student;
		}
	}

	return output;
}



