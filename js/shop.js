//=========SHOW AND HIDE CART POPUP WHEN CLICK===========

const showCart = document.querySelector("#showCart");
const cart = document.querySelector(".cart");
const hideCart = document.querySelector("#cart-close");

showCart.addEventListener("click", function(){
    cart.classList.add("active");
})
hideCart.addEventListener("click", function(){
    cart.classList.remove("active");
})

// Initialize Count of cart
let cartCount = 0;

// Function to update cart count
function updateCartCount(count) {
    cartCount = count;
    document.getElementById('cartCount').textContent = cartCount;

    const cartEmptyText = document.getElementById("cart_empyty_text");
    if(cartCount>0){
        cartEmptyText.style.display = 'none';
    }else{
        cartEmptyText.style.display = 'block';   
    }
}

//checking that the document is ready and start
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", start);
} else{
    start();
}

//=================START=================
function start(){
    loadCartFromLocalStorage();
    addEvents();
}

//===========UPDATE AND RENDER===========
function update(){
    addEvents();
    updateTotal();
}

//==============ADD EVENTS===============
function addEvents(){
    //remove item from cart
    let cartRemove_btns = document.querySelectorAll(".trash-icon");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn)=>{
        btn.addEventListener("click", handle_removeCartItem);
    });

    //change item quantity
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach(input =>{
        input.addEventListener("change", handle_changeItemQuantity);
    });

    //add item to cart
    let addCart_btns = document.querySelectorAll(".addCard");
    addCart_btns.forEach(btn =>{
        btn.addEventListener("click", handle_addCartItem);
    });
}

//========HANDLE EVENTS FUNCTIONS========
function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-image").src;
    console.log(title, price, imgSrc);
    
    //add product to cart
    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    // Increment cart count
    updateCartCount(cartCount + 1);

    saveCartToLocalStorage();
    update();

}

function handle_removeCartItem(){
    this.parentElement.remove();

    // Decrement cart count if it's greater than 0
    if (cartCount > 0) {
        updateCartCount(cartCount - 1);
    }    

    saveCartToLocalStorage();
    update();
}
function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    this.value = Math.floor(this.value); //to keep it integer

    update();
}

//===========save to local storage===========

function saveCartToLocalStorage() {
    let cartItems = [];
    let cartBoxes = document.querySelectorAll(".cart-box");

    cartBoxes.forEach((cartBox) => {
        let title = cartBox.querySelector(".class-product-title").textContent;
        let price = cartBox.querySelector(".cart-price").textContent;
        let imgSrc = cartBox.querySelector(".cart-img").src;
        let quantity = cartBox.querySelector(".cart-quantity").value;

        let item = {
            title,
            price,
            imgSrc,
            quantity
        };

        cartItems.push(item);
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
//==============get from local storage==============
function loadCartFromLocalStorage() {
    let storedCartItems = localStorage.getItem('cartItems');
    
    if (storedCartItems) {
        let cartItems = JSON.parse(storedCartItems);
        cartItems.forEach((item) => {
            let cartBoxElement = CartBoxComponent(item.title, item.price, item.imgSrc);
            let newNode = document.createElement("div");
            newNode.innerHTML = cartBoxElement;
            
            const cartContent = cart.querySelector(".cart-content");
            cartContent.appendChild(newNode);
            
            newNode.querySelector(".cart-quantity").value = item.quantity;
        });

        updateTotal();
        updateCartCount(cartItems.length);
    }
}
//===checkout form======
function goToCheckout() {
    saveCartToLocalStorage();
    window.location.href = 'subpages/checkout.html';
}


//=====UPDATE AND RENDER FUNCTIONS=======
function updateTotal(){
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) =>{
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price*quantity;
    });

    totalElement.innerHTML = "$" + total;

    // Save total to local storage
    localStorage.setItem('total', total);
}



//=========HTML COMPONENTS===========
function CartBoxComponent(title, price, imgSrc){
    return ` 
    <div class="cart-box">
        <img src="${imgSrc}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="class-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!--Clear cart-->
        <img src="resources/images/cartImages/trash.png" alt="" class="trash-icon">
    </div>`;
}
