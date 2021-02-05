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
    
    /** Web Application Startup Functions */
    /** Start() - Lets the application know which content to load
     *          based on the title of the document.
    */
    function Start() {
        console.log("Web App Started.");``

        // Fix the "Products" Nav item
        

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
        }
    }

    /** Display Page Content Functions */
    /** displayHomePage() - Loads the Content for index.html */
    function displayHomePage() {

        let newParagraph = document.createElement("p");
        let mainContent = document.getElementsByTagName("main")[0];

        fixNavBars();

        newParagraph.setAttribute("id", "paragraphOne");
        newParagraph.textContent = "Paragraph One!";
        newParagraph.className = "fs-6";

        mainContent.appendChild(newParagraph);
    }

    /** displayAboutPage() - Loads the Content for about.html */
    function displayAboutPage() {

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

    function fixNavBars()
    {
        
        mainConten = document.getElementsByTagName("main")[0];
        // Fix the "Products" Nav item
        let projectPageAnchor = document.getElementById("projects");    // Get the Nav item Anchor tag by id
        let footerData = "";
        projectPageAnchor.setAttribute("href", "projects.html");        // Correctly set the Hypertext Reference attribute
        projectPageAnchor.textContent = " Projects";                    // Correctly set the text to indicate a project page

        // Insert a new footer NavBar
        let pageFooter = document.createElement("footer");
        mainConten.parentNode.insertBefore(pageFooter, mainConten.nextSibling);

        footerData = '<nav class="navbar fixed-bottom navbar-light bg-light"> ' +
                     '<div class="container-fluid"> ' +
                     '<h4><i class="far fa-copyright fa-lg"></i> Copyright 2021.</h4> ' +
                     '</div> ' +
                     '</nav> ';
        pageFooter.innerHTML = footerData;

    }

    // Add an event listener for the load event (Page load).
    //-Call the Start() function so that we can display page
    //-specific content
    window.addEventListener("load", Start);

})();
