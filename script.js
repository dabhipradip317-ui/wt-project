let cartData = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price) {
    cartData.push({ name, price });
    saveCart();
    displayCart();
}
function displayCart() {
    let cart = document.getElementById("cart");
    cart.innerHTML = "";
    let total = 0;
    cartData.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cart.appendChild(li);
        total += item.price;
    });
    document.getElementById("total").textContent = "Total: ₹" + total;
}
function removeItem(index) {
    cartData.splice(index, 1);
    saveCart();
    displayCart();
}
function clearCart() {
    cartData = [];
    saveCart();
    displayCart();
}
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartData));
}
function placeOrder() {
    let name = document.getElementById("username").value;
    if (name === "") {
        alert("Please enter your name!");
        return;
    }
    if (cartData.length === 0) {
        alert("Cart is empty!");
        return;
    }
    localStorage.setItem("order", JSON.stringify(cartData));
    localStorage.setItem("username", name);
    clearCart();
    window.location.href = "receipt.html";
}
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
displayCart();