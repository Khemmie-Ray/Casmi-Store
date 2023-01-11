// Getting DOM elements
const product = JSON.parse(localStorage.getItem("product"));
const productContainer = document.querySelector(".product-container");
const addedToCartMessage = document.querySelector(".added-to-cart");
addedToCartMessage.style.display = "none";
const productName = document.querySelector(".product-name");
productName.textContent = "Product " + product.id;
const productImg = document.querySelector(".product-img img");
productImg.src = product.urls.small;
const randomPrice = Math.floor(Math.random() * 300);
const productDescription = document.querySelector(".product-description");
productDescription.textContent = product.alt_description;
const productPrice = document.querySelector(".product-price");
productPrice.textContent = `$${randomPrice}`;
const cartDiv = document.querySelector(".cart-items");
const addToCartBtn = document.querySelector(".add-button");
const cart = [];

addToCartBtn.addEventListener("click", addToCart);

function message(message) {
  addedToCartMessage.style.display = "block";
  addedToCartMessage.textContent = message;
  setTimeout(() => (addedToCartMessage.style.display = "none"), 2000);
}

// creating the add to cart function

function addToCart() {
  let localCart = JSON.parse(localStorage.getItem("cart"));
  if (!localCart) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    message("Added to cart");
  } else {
    let isPresent = localCart.some((item) => item.id === product.id);
    if (isPresent) {
      message("Product already in cart");
      return;
    }
    localCart.push(product);
    localStorage.setItem("cart", JSON.stringify(localCart));
    message("Added to cart");
  }
}

