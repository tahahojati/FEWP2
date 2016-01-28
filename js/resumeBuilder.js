var bio = {
    name: "Taha Pourjalali",
    role: "Frond-end web developer",
    contacts: {
        mobile: "(808)232-8467",
        email: "taha@hawaii.edu",
        github: "tahahojati",
    },
    location: "Honolulu, HI",
    welcomeMessage: "Physics graduate and experienced web developer.",
    skills: ["Computer programming: C/C++, Java, Perl, Python",
        "Web design: PHP, Javascript, HTML, CSS", "Knowledgable in undergraduate math and physics",
        "Fluent in Persian with an understanding of Spanish"
    ],
    biopic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUfAAAAJGQ2ZjEwY2MwLWYwMDUtNDBlZS04ZTM5LWY3YzEwYWEzZWZmNA.jpg",
    display: function(x) {
		var lines = [];
		var temp = []; 
		if (x==="rest"){
			lines = [];
			temp = []; 
			lines.push( HTMLbioPic.replace("%data%", bio.biopic));
			lines.push( HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
			for (var i =0; i < bio.skills.length; ++i){
				temp.push(HTMLskills.replace("%data%", bio.skills[i]));
			}
			lines.push(HTMLskillsStart.replace("%data%", temp.join("\n")));
			var output = "";
			for (i in lines) {
				output = output + lines[i] + "\n";
			}
			return output;
		}
		else if (x === "name"){
			lines = [];
			temp = []; 
			lines.push( HTMLheaderName.replace("%data%", bio.name));
			lines.push( HTMLheaderRole.replace("%data%", bio.role));
		}
		else if(x === "contacts"){
			lines = [];
		lines[0] = HTMLmobile.replace("%data%", bio.contacts.mobile);
        lines[1] = HTMLemail.replace("%data%", bio.contacts.email);
        lines[2] = HTMLgithub.replace("%data%", bio.contacts.github);
		lines.push(HTMLlocation.replace("%data%", bio.location));
		}
		console.log(lines[0]);
		return lines.join("\n"); 
    }
}

var education = {
    schools: [{
        name: "University of Hawaii at Manoa",
        location: "Honolulu, HI",
        degree: "Bachelor of Science(B.S.)",
        majors: ["Physics"],
        dates: "2011 - 2016",
        url: "www.hawaii.edu",
    }],
    onlineCourses: [{
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            date: "2016",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        }],
        display: function() {
			var lines = [];
			var temp = [] ; 
			var schoolsize, onlinesize, temp2, thisschool, output; 
			schoolsize = education.schools.length; 
			onlinesize = education.onlineCourses.length;
			for ( var i =0 ; i < schoolsize; ++i){
				temp = [] ; 
				temp2 = education.schools[i].majors.join(", ");
				temp[0] = HTMLschoolName.replace("%data%",education.schools[i].name); 
				temp[1] = HTMLschoolDegree.replace("%data%", education.schools[i].degree) ; 
				temp[2] = HTMLschoolDates.replace("%data%", education.schools[i].dates) ;
				temp[3] = HTMLschoolLocation.replace("%data%", education.schools[i].location); 
				temp[4] = HTMLschoolMajor.replace("%data%", temp2) ; 
				lines[i] = HTMLschoolStart.replace("%data%",temp.join("\n")) ; 
				/*HTMLschoolName = HTMLschoolName.replace("%data%", '<a href="#">%data%';
				HTMLschoolDegree = HTMLschoolDegree.replace("%data%", ' -- %data%</a>';
				HTMLschoolDates = HTMLschoolDates.replace("%data%", '<div class="date-text">%data%</div>'; HTMLschoolLocation = HTMLschoolLocation.replace("%data%", '<div class="location-text">%data%</div>'; HTMLschoolMajor = HTMLschoolMajor.replace("%data%", '<em><br>Major: %data%</em>';*/
			}
			lines[schoolsize] = HTMLonlineClasses; 
			for(var i = schoolsize ; i < schoolsize + onlinesize ; ++i){
				temp = [] ;
				temp[0] = HTMLonlineTitle.replace("%data%", education.onlineCourses[i - schoolsize].title) ; 
				temp[1] = HTMLonlineSchool.replace("%data%", education.onlineCourses[i - schoolsize].school) ;
				temp[2] = HTMLonlineDates.replace("%data%", education.onlineCourses[i - schoolsize].date); 
				temp[3] = HTMLonlineURL.replace("%data%", education.onlineCourses[i - schoolsize].url) ; 
				lines[i+1] = HTMLschoolStart.replace("%data%",temp.join("\n")) ; 
			}
			output = lines.join("\n") ; 
			return output;
            /*HTMLonlineClasses = HTMLonlineClasses.replace("%data%", '<h3>Online Classes</h3>';
			HTMLonlineTitle = HTMLonlineTitle.replace("%data%", '<a href="#">%data%'; 
			HTMLonlineSchool = HTMLonlineSchool.replace("%data%", ' - %data%</a>'; 
			HTMLonlineDates = HTMLonlineDates.replace("%data%", '<div class="date-text">%data%</div>';
			HTMLonlineURL = HTMLonlineURL.replace("%data%", '<br><a href="#">%data%</a>';*/
		}
}

var work = {
    jobs: [{
            employer: "Il Lupino Trattoria & Wine Bar",
            title: "Waiter",
            location: "Honolulu, HI",
            dates: "October 2015 - Present",
            description: "Serving delicious, authentic Italian cuisine made from highest quality ingredients in a relaxing atmosphere.",
        }, {
            employer: "The Old Spaghetti Factory",
            title: "Waiter",
            location: "Honolulu, HI",
            dates: "June 2015 - October 2015",
            description: "",
        }, {
            employer: "University of Hawaii at Manoa",
            title: "Physics Tutor",
            location: "Honolulu, HI",
            dates: "May 2014 - August 2014",
            description: "Tutored UH Manoa students in both mechanics and electricity and magnetism, and also conducted study sessions in both areas.",
        }],
        display: function(){
			var lines = [] ;
			var temp =[] ;
			for(i in work.jobs){
				temp = [] ;
				temp[0] = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) ; 
				temp[1] = HTMLworkTitle.replace("%data%", work.jobs[i].title );
				temp[2] = HTMLworkDates.replace("%data%", work.jobs[i].dates) ;
				temp[3] = HTMLworkLocation.replace("%data%", work.jobs[i].location) ; 
				temp[4] = HTMLworkDescription.replace("%data%", work.jobs[i].description) ;
				lines.push(HTMLworkStart.replace("%data%" , temp.join("\n"))) ; 
			}
				/*HTMLworkStart
				HTMLworkEmployer = HTMLworkEmployer.replace("%data%", '<a href="#">%data%';
				HTMLworkTitle = HTMLworkTitle.replace("%data%", ' - %data%</a>'; 
				HTMLworkDates = HTMLworkDates.replace("%data%", '<div class="date-text">%data%</div>';
				HTMLworkLocation = HTMLworkLocation.replace("%data%", '<div class="location-text">%data%</div>'; 
				HTMLworkDescription = HTMLworkDescription.replace("%data%", '<p><br>%data%</p>';*/
			return lines.join("\n"); 
		}
}

var projects_section = {
    projects: [{
            title: "Constructing a 3D printer",
            dates: "In progress",
            description: "I am trying to build a 3D printer based on the well known reprap design.",
            images: ["http://reprap.org/mediawiki/images/5/5b/Builder.jpg"]
        }],
        display: function(){
			var lines = [] ;
			var temp =[] ;
			for(i in projects_section.projects){ 
				temp = [] ;
				temp[0] = HTMLprojectTitle.replace("%data%", projects_section.projects[i].title) ; 
				temp[1] = HTMLprojectDates.replace("%data%", projects_section.projects[i].dates );
				temp[2] = HTMLprojectDescription.replace("%data%", projects_section.projects[i].description) ;
				temp.push(HTMLprojectImage.replace("%data%",projects_section.projects[i].images[0] ));
				//temp[3] = HTMLprojectImage.replace("%data%", projects[i].images[0]) ; 
				lines.push(HTMLprojectStart.replace("%data%" , temp.join("\n"))) ; 
			}

			return lines.join("\n"); 
			
			/*HTMLprojectStart = HTMLprojectStart.replace("%data%", '<div class="project-entry"></div>'; 
			HTMLprojectTitle = HTMLprojectTitle.replace("%data%", '<a href="#">%data%</a>';
			HTMLprojectDates = HTMLprojectDates.replace("%data%", '<div class="date-text">%data%</div>';
			HTMLprojectDescription = HTMLprojectDescription.replace("%data%", '<p><br>%data%</p>'; 
			HTMLprojectImage = HTMLprojectImage.replace("%data%", '<img src="%data%">';*/

		}
}

$("#header").prepend(bio.display("name")); 
$("#header").append(bio.display("rest")); 
$("#topContacts").append(bio.display("contacts"));
$("#education").append(education.display()); 
$("#workExperience").append(work.display());
$("#projects").append(projects_section.display());
$("#footerContacts").append(bio.display("contacts"));
$("#mapDiv").append(googleMap);

