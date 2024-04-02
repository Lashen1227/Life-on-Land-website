let form = document.getElementById("form");
let popup = document.getElementById("popup");
let close = document.getElementById("close");
let total = parseFloat(localStorage.getItem("total")).toFixed(2); // Parse float and round to 2 decimal places
let total_amount = document.getElementById("total_price");

// Check if total is not null and greater than 0
if (total && total > 0) {
    total_amount.innerHTML = "Total amount: $" + total;
} else {
    total_amount.innerHTML = "Total amount not available";
    alert("Your cart is empty. Please add items to your cart before proceeding to checkout.");
    window.location.href = "../shop.html"; // Redirect to shop page if cart is empty
}

// set total amount
total_amount.innerHTML = "Total amount : $" + total;

// on submit open popup
form.addEventListener("submit", function(e){
    e.preventDefault();
    popup.classList.add("open-popup-field");

     // Clear cart items after successful checkout
     localStorage.removeItem("cartItems");
}
);

// on close redirect to home
close.addEventListener("click", function(){
    popup.classList.remove("open-popup-field");
    window.location.href = "../shop.html"; 
}
);