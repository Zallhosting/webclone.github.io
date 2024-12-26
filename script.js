document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Internet Quota", price: 50000, image: "https://via.placeholder.com/250x150?text=Internet+Quota" },
    { id: 2, name: "Phone Credit", price: 20000, image: "https://via.placeholder.com/250x150?text=Phone+Credit" },
    { id: 3, name: "PLN Token", price: 100000, image: "https://via.placeholder.com/250x150?text=PLN+Token" },
  ];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  let cart = [];

  // Render product list
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: Rp${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
  });

  // Add product to cart
  window.addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    renderCart();
  };

  // Render cart items
  const renderCart = () => {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;
      const cartItem = document.createElement("li");
      cartItem.textContent = `${item.name} - Rp${item.price}`;
      cartItem.innerHTML += ` <button onclick="removeFromCart(${index})">Remove</button>`;
      cartItems.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Total: Rp${total}`;
  };

  // Remove item from cart
  window.removeFromCart = (index) => {
    cart.splice(index, 1);
    renderCart();
  };
});
