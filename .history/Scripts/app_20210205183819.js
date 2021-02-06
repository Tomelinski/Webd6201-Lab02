/** Author(s): Tom Zielinski,
 *             Calvin May
 * 
 *  Date: 02/02/2021 | Last Modified: 02/03/2021
 *  Document: app.js
 *  Description: ...
 */

/** Custom JavaScript Page */

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
        console.log("Web App Started.");``


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
        }
       
    }

    /** Display Page Content Functions */
    /** displayHomePage() - Loads the Content for index.html */
    function displayHomePage() {

        let newParagraph = document.createElement("p");
        newParagraph.setAttribute("id", "paragraphOne");
        newParagraph.className = "fs-6 col col-md-4 mt-5 m-auto px-4 border border-dark border-4 rounded";
        newParagraph.textContent = "Welcome to Cavlin May's and Tom Zielinski's Webd6201 Lab01 webpage.";

        mainContent.appendChild(newParagraph);
    }

    /** displayAboutPage() - Loads the Content for about.html */
    function displayAboutPage() {

        // Declarations
        let aboutTomDiv = document.getElementById("about-tom");

        let aboutHeading = document.createElement("h2");
        aboutHeading.textContent = "Tom Zielinski";

        let resumeHeading = document.createElement("h3");
        resumeHeading.textContent = "Resume"

        let pic = document.createElement("img");
        pic.setAttribute("src", "../Pictures/Tom.jpeg");
        pic.setAttribute("class", "headshot-portrait");
        pic.setAttribute("height", "100");
        pic.setAttribute("width", "100");
        pic.setAttribute("alt", "Headshot of Tom");
        
        let aboutTom = document.createElement("p");
        aboutTom.innerHTML = `</br><p>Hello, My name is Tom Zielinski. I am a second year student at Durham College enrolled in the Computer Programming & Analysis program.</p>`;
        
        aboutTomDiv.appendChild(pic);
        aboutTomDiv.appendChild(aboutHeading);
        aboutTomDiv.appendChild(aboutTom);
        aboutTomDiv.appendChild(resumeHeading);
        
        let aboutCalvinDiv = document.getElementById("about-calvin");

        aboutHeading.textContent = "Calvin May";
         let calvinPortrait = document.createElement("img");
         calvinPortrait.setAttribute("src", "../Pictures/Tom.jpeg");
         calvinPortrait.setAttribute("class", "headshot-portrait");
         calvinPortrait.setAttribute("alt", "Headshot of Tom");
        
         aboutCalvinDiv.appendChild(calvinPortrait);
         aboutCalvinDiv.appendChild(aboutHeading);
    }

    /** displayContactPage() - Loads the Content for contact.html */
    function displayContactPage() {

    }

    /** displayProjectsPage() - Loads the Content for projects.html */
    function displayProjectsPage() {

    }

    /** displayServicesPage() - Loads the Content for services.html */
    function displayServicesPage() {

    }

    /** displayHumanResourcesPage() - Loads the Content for human_resources.html */
    function displayHumanResourcesPage() {
        

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
