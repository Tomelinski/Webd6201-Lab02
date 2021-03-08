/** Author(s): Tom Zielinski 100559389,
 *             Calvin May 100745125
 * 
 *  Date: 02/02/2021 | Last Modified: 03/07/2021
 *  Document: app.js
 *  Description: This is the app.js file that is used to hold the JavaScript Logic throughout the website.
 *               It is primarily used to inject javascript into webpages creating and updating html elements
 *               (DOM Manipulation).
 */

/** Custom JavaScript Page */

/** User Class */
class User {
    //getters and setters
    get FirstName() {
      return this.m_firstName;
    }
    set FirstName(value) {
      this.m_firstName = value;
    }
    get LastName() {
      return this.m_lastName;
    }
    set LastName(value) {
      this.m_lastName = value;
    }
    get Username() {
      return this.m_username;
    }
    set Username(value) {
      this.m_username = value;
    }
    get EmailAddress() {
      return this.m_emailAddress;
    }
    set EmailAddress(value) {
      this.m_emailAddress = value;
    }
    get Password() {
      return this.m_password;
    }
    set Password(value) {
      this.m_password = value;
    }
    
    /**
     * 
     * @param {*} firstName 
     * @param {*} lastName 
     * @param {*} username 
     * @param {*} emailAddress 
     * @param {*} password 
     */
    constructor(firstName ="", lastName ="", username="", emailAddress="", password="") {
      this.m_firstName= firstName;
      this.m_lastName= lastName;
      this.m_username = username;
      this.m_emailAddress = emailAddress;
      this.m_password = password;
    }

    toString() {
        return `First Name: ${this.FirstName} 
    Last Name: ${this.LastName} 
    Username: ${this.Username}
    Email Address: ${this.EmailAddress}`;
      }
  
  }

/** IFFE Function */
(() => {

    // Declarations
    let mainContent = document.getElementsByTagName("main")[0]; // Holds the <main> element
    

    // First Fix the upper, lower navbars. Ensuring they display properly
    fixNavBars();

    /** Web Application Startup Functions */
    /** Start() - Lets the application know which content to load
     *          based on the title of the document.
    */
    function Start() {
        console.log("Web App Started.");


        // A switch case used to figure out which page is being loaded.
        switch (document.title) {
            case "Home":
                displayHomePage();
                break;
            case "About":
                displayAboutPage();
                break;
            case "Contact":
                displayContactPage();
                break;    
            case "Projects":
                displayProjectsPage();
                break;
            case "Services":
                displayServicesPage();
                break;
            case "Human Resources":
                displayHumanResourcesPage();
                break;   
            case "Login":
                displayLogin();
                break;    
            case "Register":
                displayRegister();
                break;    
                 
        }
       
    }

    /** Display Page Content Functions */
    /** displayHomePage() - Loads the Content for index.html */
    function displayHomePage() {
        //create welcome paragraph in home page
        let welcomeMessage = document.createElement("p");
        welcomeMessage.setAttribute("id", "paragraphOne");
        welcomeMessage.className = "fs-6 col col-md-4 mt-5 m-auto px-4 border border-dark border-4 rounded";
        welcomeMessage.textContent = "Welcome to Cavlin May's and Tom Zielinski's Webd6201 Lab01 webpage.";

        mainContent.appendChild(welcomeMessage);
    }

    /** displayAboutPage() - Loads the Content for about.html */
    function displayAboutPage() {

        // About Tom Content
        //-Create Elements for About Tom
        let aboutTomDiv = document.getElementById("about-tom");
        let tomHeading = document.createElement("h2");
        let pic = document.createElement("img");
        let aboutTom = document.createElement("p");
        let tomResume = document.createElement("a");
        
        // Set the Attributes, html, and Content for Toms Elements
        //-Name Heading
        tomHeading.textContent = "Tom Zielinski"; 
        //-Portrait
        pic.setAttribute("src", "Pictures/Tom.jpeg");
        pic.setAttribute("class", "headshot-portrait");
        pic.setAttribute("alt", "Headshot of Tom");   
        //-Resume
        tomResume.setAttribute("href", "files/resumes/Tom_Resume.pdf");
        tomResume.setAttribute("target", "_blank");
        tomResume.setAttribute("class", "btn btn-primary");
        tomResume.textContent = "Resume";
        //-About Info
        aboutTom.innerHTML = `<hr/><p>Hello, My name is Tom Zielinski.<br/><br/>
I am a second year student at Durham College enrolled in the Computer Programming & Analysis program.
I’m passionate about coding and learning how things work.
I also have a strong understanding for the fundamentals of code which allows me to easily understand new concepts and languages.
<br/>
    Over the last year I learned C#/C++, PHP, MySQL, HTML/CSS, and .NET in depth. I also learned
different software development methodologies such as Agile and Waterfall. Since I have always
been interested in computer programming, I wanted to keep learning even after school was
finished for the year. Over this year, I’ve been teaching myself JavaScript (JSON, React, NodeJS,
Express and MongoDB) and Git/Github through creating multiple web-apps as side projects, as
well as creating a personal website to sharpen my skills in HTML/CSS. For fun, I recreated the
Snake game in C#, and I learned how to use Unity to create an Angry Birds replica in C#
<br/>
If this interests you please visit my LinkedIn <a class="nav-link" href="https://www.linkedin.com/in/tom-zielinski-904262201/">LinkedIn</a>
If you want to look at some of my Projects feel free to look at my GitHub<a class="nav-link" href="https://github.com/Tomelinski?tab=repositories">GitHub</a>
</p>`;
        
        // Insert the Elements within the about-tom div
        aboutTomDiv.appendChild(pic);
        aboutTomDiv.appendChild(tomHeading);
        aboutTomDiv.appendChild(tomResume);
        aboutTomDiv.appendChild(aboutTom);
        
        // About Calvin Content
        //-Create Elements for About Calvin
        let aboutCalvinDiv = document.getElementById("about-calvin");
        let calvinHeading = document.createElement("h2");
        let calvinPortrait = document.createElement("img");
        let aboutCalvin = document.createElement("p");
        let calvinResume = document.createElement("a");

        // Set the Attributes, html, and Content for Toms Elements
        //-Name Heading
        calvinHeading.textContent = "Calvin May";
        //-Portrait
        calvinPortrait.setAttribute("src", "Pictures/Calvin.jpg");
        calvinPortrait.setAttribute("class", "headshot-portrait");
        calvinPortrait.setAttribute("alt", "Headshot of Calvin");
        //-Resume
        calvinResume.setAttribute("href", "files/resumes/Calvin_Resume.pdf");
        calvinResume.setAttribute("target", "_blank");
        calvinResume.setAttribute("class", "btn btn-primary");
        calvinResume.textContent = "Resume"; 
        //-About Info
        aboutCalvin.innerHTML = `<hr/>
        <p>Hi, my name's Calvin. <br/><br/>
        I'm a Coop Student at Durham College working towards an Advanced Diploma in
        Computer Programming & Analysis. If you've stumbled upon this website, you're
        probably my professor, hey Tom! I hope grading isn't taking up too much of your
        time, see you in class! <br/>
        If your not my professor, that was a bit awkward. <br/>
        I'm an aspiring developer, like my friend Tom to your right, and have experience
        in several programming languages like C#, C++, and PHP. But this website doesn't
        use PHP. The dynamic portions of this website are programmed using JavaScript
        and DOM Manipulation.
        <br/> <br/>
        If you want to get to know me a bit more, click the resume button by my name or
        take a look at my linkedIn Account. <br/>
        <a class="nav-link" href="https://www.linkedin.com/in/calvin-may-384798200/">My LinkedIn</a>
        </p>`;       
        
        // Insert the Elements within the about-tom div
        aboutCalvinDiv.appendChild(calvinPortrait);
        aboutCalvinDiv.appendChild(calvinHeading);
        aboutCalvinDiv.appendChild(calvinResume);
        aboutCalvinDiv.appendChild(aboutCalvin);
    }

    /** displayContactPage() - Loads the Content for contact.html */
    function displayContactPage() {
        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location = "index.html";
        });
    }

    /** displayProjectsPage() - Loads the Content for projects.html */
    function displayProjectsPage() {
        // About project one
        //-Create Elements for About project one
        let projectOne = document.getElementById("project1");
        let projectOneHeading = document.createElement("h2");
        let picOne = document.createElement("img");
        let aboutProjectOne = document.createElement("p");
        
        // Set the Attributes, html, and Content for project 1 Elements
        //-Name Heading
        projectOneHeading.textContent = "Snake Game Project"; 
        //-Portrait
        picOne.setAttribute("src", "Pictures/Snake.png");
        picOne.setAttribute("class", "projectOnePic");
        picOne.setAttribute("alt", "Snake project");   

        //-About project Info
        aboutProjectOne.innerHTML = `<p>This is our project of recreating the famous Snack game in C#. We utilized enum's and a variety of functions to make it function exactly like the real snake game</p>`;
        
        // Insert the Elements within the project1 div
        projectOne.appendChild(picOne);
        projectOne.appendChild(projectOneHeading);
        projectOne.appendChild(aboutProjectOne);

        // About project Two -----------------------------------------------
        //-Create Elements for About project Two
        let projectTwo = document.getElementById("project2");
        let projectTwoHeading = document.createElement("h2");
        let picTwo = document.createElement("img");
        let aboutProjectTwo = document.createElement("p");
        
        // Set the Attributes, html, and Content for project 1 Elements
        //-Name Heading
        projectTwoHeading.textContent = "Trip Logger Website"; 
        //-Portrait
        picTwo.setAttribute("src", "Pictures/TripLogger.JPG");
        picTwo.setAttribute("class", "projectTwoPic");
        picTwo.setAttribute("alt", "A screenshot of the Trip Logger website");   

        //-About project Info
        aboutProjectTwo.innerHTML = `<p>This is Tom's Website, the Trip loggerUsers can login to their account and track where they've been in the world, and store their favourite memery and picture from that location.
        This web app was built with a React front-end, Node/Express back-end and a MongoDB database. This app utilizes the Google Maps Embed and Google Geolocation APIs, and features a REST API in the back-end.</p>`;
        
        // Insert the Elements within the project1 div
        projectTwo.appendChild(picTwo);
        projectTwo.appendChild(projectTwoHeading);
        projectTwo.appendChild(aboutProjectTwo);

        // About project Three -----------------------------------------------
        //-Create Elements for About project Three
        let projectThree = document.getElementById("project3");
        let projectThreeHeading = document.createElement("h2");
        let picThree = document.createElement("img");
        let aboutProjectThree = document.createElement("p");
        
        // Set the Attributes, html, and Content for project Three Elements
        //-Name Heading
        projectThreeHeading.textContent = "Angry birds replica Game Project"; 
        //-Portrait
        picThree.setAttribute("src", "Pictures/MadBirds.JPG");
        picThree.setAttribute("class", "projectThreePic");
        picThree.setAttribute("alt", "Screenshot of the Mad Birds game.");   

        //-About project Info
        aboutProjectThree.innerHTML = `<p>This is our Replica of Angry birds called MadBirds for copy write reasons. We Utilized Unity to create an environment that can recreate gravity and simulate the many features we required to make this possible</p>`;
        
        // Insert the Elements within the project3 div
        projectThree.appendChild(picThree);
        projectThree.appendChild(projectThreeHeading);
        projectThree.appendChild(aboutProjectThree);
    }

    /** displayServicesPage() - Loads the Content for services.html */
    function displayServicesPage() {

        // About Service one
        //-Create Elements for About Service one
        let serviceOne = document.getElementById("service1");
        let serviceOneHeading = document.createElement("h2");
        let serviceOnePic = document.createElement("img");
        let aboutServiceOne = document.createElement("p");
        
        // Set the Attributes, html, and Content for Service 1 Elements
        //-Name Heading
        serviceOneHeading.textContent = "Custom Web Pages"; 
        //-Portrait
        serviceOnePic.setAttribute("src", "Pictures/service_webdev.jpg");
        serviceOnePic.setAttribute("class", "serviceOnePic");
        serviceOnePic.setAttribute("alt", "A laptop with html code.");   

        //-About Service Info
        aboutServiceOne.innerHTML = `<hr/><p>Tom and Calvin have extensive experience creating reliable, secure, and responsive websites. 
                                             With experience in several languages such as JavaScript, PHP, C#, HTMl, and CSS you can trust us
                                             to develop the modern website that you desire.
                                          </p>`;
        
        // Insert the Elements within the Service1 div
        serviceOne.appendChild(serviceOnePic);
        serviceOne.appendChild(serviceOneHeading);
        serviceOne.appendChild(aboutServiceOne);

        // About Service Two---------------------------------------
        //-Create Elements for About Service one
        let serviceTwo = document.getElementById("service2");
        let serviceTwoHeading = document.createElement("h2");
        let serviceTwoPic = document.createElement("img");
        let aboutServiceTwo = document.createElement("p");
        
        // Set the Attributes, html, and Content for Service 2 Elements
        //-Name Heading
        serviceTwoHeading.textContent = "Interactive .NET Applications"; 
        //-Portrait
        serviceTwoPic.setAttribute("src", "Pictures/service_dotnet.png");
        serviceTwoPic.setAttribute("class", "serviceTwoPic");
        serviceTwoPic.setAttribute("alt", "Dot Net Logo");   

        //-About Service Info
        aboutServiceTwo.innerHTML = `<hr/><p>Tom and Calvin have utilized the .NET and .NET Core frameworks to deploy interactive Windows Forms
                                             and Web Applications. Some of these projects have been hosted on the Azure Cloud Service and follow
                                             the Model-View-Controller design pattern. 
                                          </p>`;
        
        // Insert the Elements within the Service2 div
        serviceTwo.appendChild(serviceTwoPic);
        serviceTwo.appendChild(serviceTwoHeading);
        serviceTwo.appendChild(aboutServiceTwo);

        // About Service Three------------------------------------
        //-Create Elements for About Service one
        let serviceThree = document.getElementById("service3");
        let serviceThreeHeading = document.createElement("h2");
        let serviceThreePic = document.createElement("img");
        let aboutServiceThree = document.createElement("p");
        
        // Set the Attributes, html, and Content for Service 3 Elements
        //-Name Heading
        serviceThreeHeading.textContent = "Basic Game Development"; 
        //-Portrait
        serviceThreePic.setAttribute("src", "Pictures/service_game.jpg");
        serviceThreePic.setAttribute("class", "serviceThreePic");
        serviceThreePic.setAttribute("alt", "A picture of playing dice.");   

        //-About project Info
        aboutServiceThree.innerHTML = `<hr/><p>Both Tom and Calvin have been able to apply strong problem-solving, programming, and design skills to
                                               create basic interactive games such as, Snake game and Angry Bird clones as well as basic Text RPG's
                                               and Platformers.                                
        </p>`;
        
        // Insert the Elements within the Service3 div
        serviceThree.appendChild(serviceThreePic);
        serviceThree.appendChild(serviceThreeHeading);
        serviceThree.appendChild(aboutServiceThree);
    }

    /** displayHumanResourcesPage() - Loads the Content for human_resources.html */
    function displayHumanResourcesPage() {
        

    }

    function displayLogin(){
        let navBarItemList = document.getElementById("pageList");  // Get the <ul> holding the Page links
        let loginDiv = document.getElementById("theLoginForm");
        let usernameListItem = document.createElement("li"); // Create a new list Item

        let errorMessage = document.createElement("div");
        errorMessage.setAttribute("id", "errorMEssage");
        
        
        $("#loginButton").on("click", function(){
            event.preventDefault();
            //$(this).preventDefault();
            let username = $("#username");
            let password = $("#password");
            
            if(username.val() != "" && password.val() != ""){
                console.log(username.val() + " " + password.val());
                errorMessage.textContent = null;
                errorMessage.className = null;

                usernameListItem.setAttribute("class", "nav-item");  // Set the class of the list item to "nav-item"
                // Create the anchor that will exist within the humanResourcesListItem
                let usernameData = `<a class="nav-link" aria-current="page" href="#">${username.val()}</a>`;
                // Set the innerHtml with the data above
                usernameListItem.innerHTML = usernameData;
                // Insert the new listitem before the 8th child within the <ul>
                //-(8th because it counts both the <li> elements and the <a> elements within)
                navBarItemList.insertBefore(usernameListItem, navBarItemList.childNodes[11]);
            }
            else
            {
                errorMessage.className = "alert alert-danger";
                username.trigger("focus").trigger("select");
                errorMessage.textContent = "Invalid Login - Usename/password must not be empty";
            }

            //insert error message before the 2nd node - the form
            loginDiv.insertBefore(errorMessage, loginDiv.childNodes[2]);

        });
    }


    // For validation Methods
    function textEmailAddressValidation()
    {
      let errorMessage = $("#errorMessage").hide();
  
      let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
      $("#emailAddress").on("blur", function(){
  
        if (!emailAddressPattern.test($(this).val())) {
          $(this).trigger("focus").trigger("select");

          errorMessage.show().addClass("alert alert-danger").text("Please enter a valid email address");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });
    }

    function textNameValidation()
    {
      let errorMessage = $("#errorMessage").hide();
      let nameMinChars = 2;

      $("#firstName").on("blur", function(){
        if ($(this).val().length < nameMinChars) {
          $(this).trigger("focus").trigger("select");

          errorMessage.show().addClass("alert alert-danger").text("Please Enter a valid First Name, must be greater than 2 Characters");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });

      $("#lastName").on("blur", function(){
        if ($(this).val().length < nameMinChars) {
          $(this).trigger("focus").trigger("select");

          errorMessage.show().addClass("alert alert-danger").text("Please Enter a valid Last Name, must be greater than 2 Characters");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });


    }

    function textPasswordValidation()
    {
      let errorMessage = $("#errorMessage").hide();
      let passwordMinChars = 6;

      $("#password").on("blur", function(){
        if ($(this).val().length < passwordMinChars) {
          $(this).trigger("focus").trigger("select");

          errorMessage.show().addClass("alert alert-danger").text("Please enter a valid Password. Must be Greater than 6 Characters.");
        } else {
          errorMessage.removeAttr("class").hide();
        }

        if ($("#confirmPassword").val() !== "" && $(this).val() !== $("#passwordConfirm").val())
          errorMessage.show().addClass("alert alert-danger").text("Confirm Password doesnt match password.");
          else
          errorMessage.removeAttr("class").hide();
      });


      $("#confirmPassword").on("blur", function(){
        if ($(this).val() !== $("#password").val()) {
          //$(this).trigger("focus").trigger("select");

          errorMessage.show().addClass("alert alert-danger").text("Confirm Password doesnt match password.");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });

    }

    function formValidator()
    {
      textEmailAddressValidation();
      textNameValidation();
      textPasswordValidation();
    }




    function displayRegister()
    {
      // Create the Div ErrorMessage Elements
      let registerForm = document.getElementById("registerForm");
      let errorMessage = document.createElement("div");
      errorMessage.setAttribute("id", "errorMessage");

      //insert error message before the 2nd node - the form
      registerForm.insertBefore(errorMessage, registerForm.childNodes[2]);

      formValidator();


      


    }

    /**
     * fixNavBars() - This Function is used to finish creating the Header/Footer Navbars
     *              using DOM Manipulation and Injection. First it fixes the "Products"
     *              NavBar link to correctly show, "Projects" and link to the projects.html
     *              page. It also Insert a new NavBar link, "Human Recources" between
     *              "About us" and "Contact Us" links. Finally, it adds a footer to the
     *              bottom of the page.
     */
    function fixNavBars()
    {
        // Fix the "Products" Nav item
        let projectPageAnchor = document.getElementById("projects");    // Get the Nav item Anchor tag by id
        projectPageAnchor.setAttribute("href", "projects.html");        // Correctly set the Hypertext Reference attribute
        projectPageAnchor.innerHTML = "<i class=\"fas fa-th fa-lg\"></i> Projects"; // Correctly set the text to indicate a project page
        
        // Insert a Nav item for Human Resources
        let navBarItemList = document.getElementById("pageList");  // Get the <ul> holding the Page links
        let humanResourcesListItem = document.createElement("li"); // Create a new list Item
        humanResourcesListItem.setAttribute("class", "nav-item");  // Set the class of the list item to "nav-item"
        // Create the anchor that will exist within the humanResourcesListItem
        let hrListItemData = '<a class="nav-link" aria-current="page" ' + 
                             'href="human_resources.html"><i class="fas fa-home fa-lg"></i> Human Resources</a>';
        // Set the innerHtml with the data above
        humanResourcesListItem.innerHTML = hrListItemData;
        // Insert the new listitem before the 8th child within the <ul>
        //-(8th because it counts both the <li> elements and the <a> elements within)
        navBarItemList.insertBefore(humanResourcesListItem, navBarItemList.childNodes[8]);
        
        
        // Insert a new footer NavBar
        let footerData = "";    // A variable to hold the html code for the footers navBar
        // Create the footer element
        let pageFooter = document.createElement("footer");  
        // Insert the new footer element before the "next" sibling of <main>
        //-Reads as <body>.insertBefore(pageFooter, elementAfterMain)
        mainContent.parentNode.insertBefore(pageFooter, mainContent.nextSibling);

        footerData = '<nav class="navbar fixed-bottom navbar-dark bg-dark"> ' +
                     '<div class="container-fluid"> ' +
                     '<h7 class="text-light"><i class="fas fa-copyright text-light"></i> Copyright 2021</h7> ' +
                     '</div> ' +
                     '</nav> ';
        pageFooter.innerHTML = footerData;

    }

    // Add an event listener for the load event (Page load).
    //-Call the Start() function so that we can display page
    //-specific content
    window.addEventListener("load", Start);

})();
