bio {
name : string
role : string
contacts : an object with
      mobile: string
      email: string 
      github: string
      twitter: string (optional)
      location: string
welcomeMessage: string 
skills: array of strings
biopic: url
display: function
}

education {
	schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: string (works with a hyphen between them)
     url: string
onlineCourses: array of objects with
     title: string
     school: string
     date: string (works with a hyphen between them)
     url: string
display: function
}

work {
	jobs: array of objects with
     employer: string 
     title: string 
     location: string 
     dates: string (Can be 'in progress')
     description: string 
display: function
}

projects {
	projects: array of objects with
      title: string 
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
      display: function
}