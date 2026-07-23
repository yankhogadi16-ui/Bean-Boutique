let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - MK ${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("cartTotal").textContent = `Total: MK ${total}`;
}
