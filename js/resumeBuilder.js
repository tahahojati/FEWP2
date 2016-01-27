var bio = {
    name: "Taha Pourjalali";
    role: "Frond-end web developer";
    contacts: {
		mobile: "(808)232-8467";
		email: "taha@hawaii.edu";
		github: "https://github.com/tahahojati";
	};
    location: "Honolulu, HI";
    welcomeMessage: "Physics graduate and experienced web developer.";
    skills: ["Computer programming: C/C++, Java, Perl, Python",
	"Web design: PHP, Javascript, HTML, CSS", "Knowledgable in undergraduate math and physics",
	"Fluent in Persian with an understanding of Spanish"];
    biopic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUfAAAAJGQ2ZjEwY2MwLWYwMDUtNDBlZS04ZTM5LWY3YzEwYWEzZWZmNA.jpg";
    display: function
};

var education = {
    schools: [{
			name: "University of Hawaii at Manoa";
			location: "Honolulu, HI";
			degree: "Bachelor of Science(B.S.)";
			majors: ["Physics"];
			dates: "2011 - 2016";
			url: "www.hawaii.edu";
	}]
    onlineCourses: [{
			title: "Front-End Web Developer Nanodegree";
			school: "Udacity";
			date: "2016";
			url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001";
	}]
	display: function
};

var work = {
    jobs: [{
			employer: "Il Lupino Trattoria & Wine Bar";
			title: "Waiter";
			location: "Honolulu, HI";
			dates: "October 2015 - Present";
			description: "Serving delicious, authentic Italian cuisine made from highest quality ingredients in a relaxing atmosphere.";
		},
		{
			employer: "The Old Spaghetti Factory";
			title: "Waiter";
			location: "Honolulu, HI";
			dates: "June 2015 - October 2015";
			description: "";
		},
		{
			employer: "University of Hawaii at Manoa";
			title: "Physics Tutor";
			location: "Honolulu, HI";
			dates: "May 2014 - August 2014";
			description: "Tutored UH Manoa students in both mechanics and electricity and magnetism, and also conducted study sessions in both areas.";
		}
	]
    display: function
};

var projects = {
    projects: {[
			title: "Constructing a 3D printer";
			dates: "In progress";
			description: "I am trying to build a 3D printer based on the well known reprap design.";
			images: ["http://reprap.org/mediawiki/images/5/5b/Builder.jpg"];
	}]
    display: function
};