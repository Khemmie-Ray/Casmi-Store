const product = JSON.parse(localStorage.getItem("product"));
            console.log(product);
const productContainer = document.querySelector(".product-container");
const productName = productContainer.querySelector(".product-name").textContent = "Product " + product.id; 
const productImg = productContainer.querySelector(".product-img img").src = product.urls.small_s3;
const randomPrice = Math.floor(Math.random() * 300)
const productDescription = productContainer.querySelector(".product-description").textContent = product.description;
const productPrice = productContainer.querySelector(".product-price").textContent = `$${randomPrice}`

// const cart = document.querySelector(".cart-items")

// const addToCartBtn = document.querySelector(".add-button")

// addToCartBtn.addEventListener("click", addToCart);
// const cartItems = [];

// function addToCart() {
//     let item = cartItems.push(product)
//     console.log(item)
// }