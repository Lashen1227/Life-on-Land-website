function previewFeedback() {
    let formData = new FormData(document.getElementById("form"));  // Form data object
    let previewContent = "<h2>Preview Feedback</h2>";  // Preview content heading
    // Construct preview content
    for (let pair of formData.entries()) {  // For each form field
        previewContent += "<p><strong>" + pair[0] + ":</strong> " + pair[1] + "</p>";  // Add field name and value
    }
    document.getElementById("previewFeedbackContent").innerHTML = previewContent;  // Set content
    document.getElementById("previewModal").style.display = "block";  // Display modal
}

// Hide modal
function closePreviewModal() {
    document.getElementById("previewModal").style.display = "none";
}


let form__bg = document.getElementsByClassName("form__bg")[0];
let form = document.getElementById("form");
let cursor_cont = document.getElementById("cursor");

// When the user clicks anywhere outside of the modal, close it
form__bg.addEventListener("mouseover", function () {
    cursor_cont.classList.add("cursor-hover");  //add hover effect
}
);

form__bg.addEventListener("mouseout", function () {
    cursor_cont.classList.remove("cursor-hover");  //remove hover effect
}
);

//display thank you on form submission
form.addEventListener("submit", function () {
    document.getElementById("form").style.display = "none";  //hide form
    alert("Thank you for your feedback!");
    document.querySelector("h1").innerHTML = "Thank you for your feedback!";  //change heading
}
);