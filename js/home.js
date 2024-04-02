let article_card = document.getElementsByClassName("wrapper")[0];  // Get the first element with class name "wrapper"
let links_card = document.getElementsByClassName("wrapper")[1];  // Get the second element with class name "wrapper"
let sitemap = document.getElementsByClassName("wrapper")[2];
// Get the element with id
let cursor1 = document.getElementById("cursor");
let article1 = document.getElementById("article1");
let article2 = document.getElementById("article2");
let article3 = document.getElementById("article3");
let article4 = document.getElementById("article4");
let life_on_land = document.getElementById("life_on_land");
let web__gallery = document.getElementById("web__gallery");
let target_card = document.getElementById("target__banner");
let SDGs = document.getElementById("SDGs__banner");

// Function mouseover with the parameters element and cursor
function mouseover(element, cursor) {
    // Add an event listener to the element
    element.addEventListener("mouseover", function () {
        cursor1.classList.add("cursor-hover");  // Add the class "cursor-hover" to the cursor
    }
    );
    element.addEventListener("mouseout", function () {
        cursor1.classList.remove("cursor-hover");  // Remove the class "cursor-hover" from the cursor
    }
    );
}

// Function visit with the parameters element and link
function visit(element,link) {
    element.addEventListener("click", function () {
        window.location.href = link;  // Redirect to the link when the element is clicked
    }
    );
}

mouseover(article_card, cursor);  // Call the function mouseover with the parameters article_card and cursor
mouseover(links_card, cursor);  // Call the function mouseover with the parameters links_card and cursor
mouseover(sitemap, cursor);  // Call the function mouseover with the parameters sitemap and cursor

// Call the function visit with the parameters and the link
visit(article1, "./subpages/article1.html");
visit(article2, "./subpages/article2.html");
visit(article3, "./subpages/article3.html");
visit(article4, "./subpages/article4.html");
visit(life_on_land, "./subpages/life-on-land.html");  
visit(web__gallery, "./gallery.html");
visit(target__banner, "./subpages/targets-indicators.html");
visit(SDGs, "./subpages/united-nations-goals.html");
