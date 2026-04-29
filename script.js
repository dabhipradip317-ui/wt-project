
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    saveCart();
    showCart();
}
function showCart() {
    let list = document.getElementById("cart");
    list.innerHTML = "";
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        list.appendChild(li);
        total += item.price;
    }
    document.getElementById("total").textContent = "Total: ₹" + total;
}


function clearCart() {
    cart = [];
    saveCart();
    showCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function placeOrder() {
    let name = document.getElementById("username").value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    // Show only congratulations
    alert("🎉 Congratulations! Your order is placed.");

    // Clear cart
    clearCart();
}
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
showCart();