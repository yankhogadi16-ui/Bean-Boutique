let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
}

function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - MK ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `Total: MK ${total}`;
}

window.onload = displayCart;