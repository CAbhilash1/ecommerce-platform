let cart = [];

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);

    // Update the cart count
    document.getElementById("cart-count").textContent = cart.length;

    alert(`${name} has been added to your cart.`);
}

function viewCart() {
    const modal = document.getElementById("cart-modal");
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElem = document.getElementById("total-price");

    cartItemsList.innerHTML = ""; // Clear previous items

    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);

        totalPrice += item.price;
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);

    modal.style.display = "flex";
}

function closeCart() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = "none";
}

function checkout() {
    alert("Proceeding to checkout...");
    cart = [];
    document.getElementById("cart-count").textContent = 0;
    closeCart();
}
