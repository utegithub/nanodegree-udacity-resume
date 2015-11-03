//Objects for bio, work, projects, education
var bio = {
    "name": "Ute Stohner",
    "role": "Senior Product Manager",
    "linkedin": "https://www.linkedin.com/in/utestohner",
    "hello": "Product management and eCommerce professional with more than 12 years of successful international experience. A combination of business and technical skills and a complete repertoire of Product Management, including product conception, managing the product roadmap, requirements gathering, rolling out new products and tracking metrics. Proven track record of collaborating with cross-functional teams, both onshore and offshore. ",
    "contacts": {
        "mobile": "415-568-6451",
        "email": "ustohner@gmail.com",
        "github": "utegithub",
        "twitter": "etuute",
        "welcome": "Willkommen",
        "location": "San Francisco"

    },
    "skills": ["Web Analytics", "Mobile Devices", "Agile Methodologies", "User-centered Design", "Cross-functional Team Leadership"],
    "bioPic": "images/me.jpg"
};


var education = {
    "schools": [{
        "name": "Universitaet Siegen",
        "location": "Siegen, Germany",
        "degree": "Diplom",
        "subject": "Business Administration"
            //I went to school in Germany. When I studied, studies in humanities, 
            //had the concept of major and minor, the degree was a M.A.
            //For science, technology and business, degree was a "Diplom", no major and minor
            //just one subject. (The system has changed to Bachelor and Master since then.)

    }, {
        "name": "Universitaet Anhalt",
        "location": "Koethen, Germany",
        "degree": "Diplom (FH)",
        "subject": "Computer Science"
    }]

};


var projects = {

    "projects": [{
            "title": " Intro to HTML and CSS",
            "dates": "09/2015",
            "description": "Introduction on how to convert digital design mockups into static web pages."
        },

        {
            "title": " Javascripts Basics",
            "dates": "10/2015",
            "description": "Introduction to JavaScript syntax and coding conventions that web developers use to create interactive and dynamic websites."
        }
    ]
};


var work = {
    "jobs": [{
            "employer": "Texture",
            "title": "Senior Product Manager",
            //"date": "2 years, 7 month",
            "location": "Menlo Park",
            "dates": "May 2013-present",
            "description": "Responsible for subscription flow on texture.com. Released a new special pricing flow, in which new subscription plans can be set up without  a product release. Oversaw the re-architecture of the payment system. Integrated A/B testing into the purchase flow."
        }, {
            "employer": "eBay Inc.",
            "title": "Senior Product Manager",
            //"date": "4 years",
            "location": "San Jose",
            "dates": "April 2008 -August 2012",
            "description": "Released the flow for seller-created products (http://addproduct.ebay.com), for the first time enabling users to add product data to eBay’s product catalog. Researched customer needs and markets and identified next-generation seller tools; visited and interviewed sellers and drove competitive analysis. Successfully oversaw the launch of 17 applications in 2009, which have continued to grow to more than 45 active applications today  (http://applications.ebay.com/)"
        },

        {
            "employer": "eBay GmbH",
            "title": "Product Manager",
            //"date": "3 years",
            "location": "Dreilinden, Germany",
            "dates": "2006-2008",
            "description": "Functioned as the Owner for the Business Seller framework and ensured legal compliance; participated in weekly meetings with customer support personnel to identify product and sales strategies’ needs. Identified and drove requirements to stabilize the Business Seller framework, resulting in a noticeable reduction in Customer Support requests for that topic."
        }



    ]
};

//Displaying work

work.display = function() {



    for (var job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}


work.display();


education.display = function()

{

    for (var school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedSubject = HTMLschoolMajor.replace("%data%", education.schools[school].subject);
        $(".education-entry:last").append(formattedSubject);

    }
}


education.display();


//Display projects

projects.display = function()

{

    //set display method on projects object
    //Using dot notation set property display on object projects.

    for (var project in projects.projects) {

        //function is using a for in loop
        //inside the projects object there is an array also called projects
        $("#projects").append(HTMLprojectStart);
        //append to HTMLprojectStart

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

    }
}



projects.display();



bio.display = function() {


    //  Role, Name and Picture
    var formattedRole = HTMLheaderRole.replace("%data%", (bio.role));
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", (bio.name));
    $("#header").prepend(formattedName);
    var formattedbioPic = HTMLbioPic.replace("%data%", (bio.bioPic));
    $("#header").append(formattedbioPic);

    //Skills

    if (bio.skills.length > 0)


    {
        $("#header").append(HTMLskillsStart);
        //append HTMLskillstart

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

        $("#skills").append(formattedSkill);
        //var formattedSkill is created by taking HTMLSkills and calling .replace. Replace data placehoder with the second in the list.
        //Append that list to the page
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
    }

    //Summary
    var formattedSummary = HTMLsummary.replace("%data%", (bio.hello));
    $("#skills").append(formattedSummary);

    //Contacts
    var formattedMobile = HTMLmobile.replace("%data%", (bio.contacts.mobile));
    $("#topContacts").prepend(formattedMobile);
    var formattedGithub = HTMLgithub.replace("%data%", (bio.contacts.github));
    $("#topContacts").prepend(formattedGithub);
    var formattedEmail = HTMLemail.replace("%data%", (bio.contacts.email));
    $("#topContacts").prepend(formattedEmail);
    var formattedLocation = HTMLlocation.replace("%data%", (bio.contacts.location));
    $("#topContacts").prepend(formattedLocation);

    //Linkedin
    var formattedLinkedin = HTMLLinkedin.replace("%data%", bio.linkedin);
    $("#footerContacts").append(formattedLinkedin);

}

bio.display();




//Display Google Map
$("#mapDiv").append(googleMap);


//Display internationalizing name (not usee)
//function inName(name){
//name = name.trim().split(" ");
//trim removes the whitsapce
//split splits the string into arrays
//name[1] = name[1].toUpperCase();
//name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

//return name[0] + " "+name[1];
//}



//$("#main").append(internationalizeButton);