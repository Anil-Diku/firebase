/* let cartItems = [];



function addToCart(itemName, itemImage, itemPrice) {
    // Your add to cart logic here
    // For demonstration purposes, let's assume the item is added successfully
    cartItems.push({ name: itemName, image: itemImage, price: itemPrice });

    renderCart();
}

function renderCart() {
    var cartDiv = document.getElementById("cart");
    var totalDiv = document.getElementById("total");

    cartDiv.innerHTML = ""; // Clear the previous content

    var totalPrice = 0;

    cartItems.forEach(item => {
        var newItem = document.createElement("div");
        newItem.classList.add("cart-item");
        newItem.innerHTML = "<img src='" + item.image + "' alt='" + item.name + "'><span>" + item.name + " - $" + item.price.toFixed(2) + "</span>";
        cartDiv.appendChild(newItem);

        totalPrice += item.price;
    });

    totalDiv.innerText = "Total: $" + totalPrice.toFixed(2);
}
 */