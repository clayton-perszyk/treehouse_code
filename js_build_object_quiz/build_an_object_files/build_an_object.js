var students = [
	{
	 "full name": {first: "joe", last: "palmer"},
	 "first name": "joe",
	 "last name": "palmer",
	 track: "ruby",
	 achievements: 12,
	 points: 1200
	},
	{
	 "full name": {first: "joe", last: "palmer"},
	 "first name": "mick",
	 "last name": "sanchez",
	 track: "javasript",
	 achievements: 5,
	 points: 120
	},
	{
	 "full name": {first: "joe", last: "palmer"},
	 "first name": "joan",
	 "last name": "christenson",
	 track: "ruby",
	 achievements: 7,
	 points: 500
	},
	{
	 "full name": {first: "joe", last: "palmer"},
	 "first name": "tony",
	 "last name": "dellano",
	 track: "ios",
	 achievements: 17,
	 points: 1500
	},
	{
  "full name": {first: "joe", last: "palmer"},
  "first name": "lilly",
  "last name": "smith",
	 track: "design",
	 achievements: 12,
	 points: 800
	}
],
    statsDiv = document.getElementById("student-stats"),
    html = "";

for (var i = 0; i < students.length; i += 1) {
	 var student = students[i],
	     name;
         html += "<h2 class='info'>" + student["full name"].first + "'s" + " Info:<h2> <ul>";



	for (var key in student) {
		
		 if (student[key].first) {
         	name = student[key].first + " " + student[key].last;
         }
		html += "<li>" + key + ": " + "<span class='value'>" + (name || student[key]) + "</span>" + "</li>";
		console.log(student[key]);

	}

	html += "</ul>";
}

statsDiv.innerHTML = html;


