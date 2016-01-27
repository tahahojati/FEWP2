var bio = {
    name: "Taha Pourjalali",
    role: "Frond-end web developer",
    contacts: {
        mobile: "(808)232-8467",
        email: "taha@hawaii.edu",
        github: "https://github.com/tahahojati",
    },
    location: "Honolulu, HI",
    welcomeMessage: "Physics graduate and experienced web developer.",
    skills: ["Computer programming: C/C++, Java, Perl, Python",
        "Web design: PHP, Javascript, HTML, CSS", "Knowledgable in undergraduate math and physics",
        "Fluent in Persian with an understanding of Spanish"
    ],
    biopic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUfAAAAJGQ2ZjEwY2MwLWYwMDUtNDBlZS04ZTM5LWY3YzEwYWEzZWZmNA.jpg",
    display: function() {
        var lines = [];
        lines[0] = HTMLheaderName.replace("%data%", bio.name);
        lines[1] = HTMLheaderRole.replace("%data%", bio.role);
        lines[2] = HTMLmobile.replace("%data%", bio.contacts.mobile);
        lines[3] = HTMLemail.replace("%data%", bio.contacts.email);
        lines[4] = HTMLgithub.replace("%data%", bio.contacts.github);
        lines[5] = HTMLlocation.replace("%data%", bio.location);
        lines[6] = HTMLbioPic.replace("%data%", bio.biopic);
        lines[7] = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        lines[8] = ""
        for (var i in bio.skills) {
            lines[8] = lines[8] + temp.replace("%data%", i) + "\n";
        }
        lines[8] = HTMLskillsStart.replace("%data%", lines[8]);
        var output = "";
        for (var i in lines) {
            output = output + i + "\n";
        }
        return output;
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
        }]
        display: function() {
			var lines = [];
			var temp = [] ; 
			var schoolsize, onlinesize, temp2, thisschool, output; 
			schoolsize = education.schools.length; 
			onlinesize = education.onlineCourses.length;
			for ( var i =0 ; i < schoolsize; ++i){
				temp = [] ; 
				temp2 = "" 
				for (i in education.schools[i].majors) temp2 = temp2 + i +", " ; 
				temp2 = temp2.slice(0,-2); 
				temp[0] = HTMLschoolName.replace("%data%",education.schools[i].name); 
				temp[1] = HTMLschoolDegree.replace("%data%", education.schools[i].degree) ; 
				temp[2] = HTMLschoolDates.replace("%data%", education.schools[i].dates) ;
				temp[3] = HTMLschoolLocation.replace("%data%", education.schools[i].location; 
				temp[4] = HTMLschoolMajor.replace("%data%", temp2) ; 
				thisschool = "" 
				for ( i in temp ){
					thisschool = thisschool + i + "\n";
					}
				lines[i] = HTMLschoolStart.replace("%data%",thisschool) ; 
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
				thisschool = "" 
								for ( i in temp ){
					thisschool = thisschool + i + "\n";
					}
					lines[i+1] = thisschool ; 
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
        }]
        //display: function
}

var projects = {
    projects: [{
            title: "Constructing a 3D printer",
            dates: "In progress",
            description: "I am trying to build a 3D printer based on the well known reprap design.",
            images: ["http://reprap.org/mediawiki/images/5/5b/Builder.jpg"],
        }]
        //display: function
}

/*HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
//HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%",'<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
//HTMLtwitter = HTMLtwitter.replace("%data%",'<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
//HTMLblog = HTMLblog.replace("%data%",'<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
HTMLlocation = HTMLlocation.replace("%data%", bio.location);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var temp = HTMLskills;
HTMLskills = "";
for (i in bio.skills) {
    HTMLskills = HTMLskills + temp.replace("%data%", i) + "\n";
}
HTMLworkStart = HTMLworkStart.replace("%data%", '<div class="work-entry"></div>'; HTMLworkEmployer = HTMLworkEmployer.replace("%data%", '<a href="#">%data%'; HTMLworkTitle = HTMLworkTitle.replace("%data%", ' - %data%</a>'; HTMLworkDates = HTMLworkDates.replace("%data%", '<div class="date-text">%data%</div>'; HTMLworkLocation = HTMLworkLocation.replace("%data%", '<div class="location-text">%data%</div>'; HTMLworkDescription = HTMLworkDescription.replace("%data%", '<p><br>%data%</p>';

                            HTMLprojectStart = HTMLprojectStart.replace("%data%", '<div class="project-entry"></div>'; HTMLprojectTitle = HTMLprojectTitle.replace("%data%", '<a href="#">%data%</a>'; HTMLprojectDates = HTMLprojectDates.replace("%data%", '<div class="date-text">%data%</div>'; HTMLprojectDescription = HTMLprojectDescription.replace("%data%", '<p><br>%data%</p>'; HTMLprojectImage = HTMLprojectImage.replace("%data%", '<img src="%data%">';

                                                HTMLschoolStart = HTMLschoolStart.replace("%data%", '<div class="education-entry"></div>'; HTMLschoolName = HTMLschoolName.replace("%data%", '<a href="#">%data%'; HTMLschoolDegree = HTMLschoolDegree.replace("%data%", ' -- %data%</a>'; HTMLschoolDates = HTMLschoolDates.replace("%data%", '<div class="date-text">%data%</div>'; HTMLschoolLocation = HTMLschoolLocation.replace("%data%", '<div class="location-text">%data%</div>'; HTMLschoolMajor = HTMLschoolMajor.replace("%data%", '<em><br>Major: %data%</em>';

                                                                        HTMLonlineClasses = HTMLonlineClasses.replace("%data%", '<h3>Online Classes</h3>'; HTMLonlineTitle = HTMLonlineTitle.replace("%data%", '<a href="#">%data%'; HTMLonlineSchool = HTMLonlineSchool.replace("%data%", ' - %data%</a>'; HTMLonlineDates = HTMLonlineDates.replace("%data%", '<div class="date-text">%data%</div>'; HTMLonlineURL = HTMLonlineURL.replace("%data%", '<br><a href="#">%data%</a>';*/