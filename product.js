const product = JSON.parse(localStorage.getItem("product"));
            console.log(product);
const productContainer = document.querySelector(".product-container");
const addedToCartMessage = document.querySelector(".added-to-cart");
addedToCartMessage.style.display = "none";
const productName = productContainer.querySelector(".product-name").textContent = `Product ${product.id}`; 
const productImg = productContainer.querySelector(".product-img img").src = product.urls.small_s3;
const randomPrice = Math.floor(Math.random() * 300)
const productDescription = productContainer.querySelector(".product-description").textContent = product.description;
const productPrice = productContainer.querySelector(".product-price").textContent = `$${randomPrice}`


const cart = [];
const addToCartBtn = document.querySelector(".add-button");

addToCartBtn.addEventListener("click", addToCart);

function addToCart() {
  let localCart = JSON.parse(localStorage.getItem("cart"));
  if (localCart.some((item) => item.id === product.id)) {
    alert("Product already in cart");
    return;
  }
  if(localCart === null) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  localCart.push(product);
  localStorage.setItem("cart", JSON.stringify(localCart));
  addedToCartMessage.style.display = "block"
  addedToCartMessage.textContent = "Added to cart"
  setTimeout(() => addedToCartMessage.style.display = "none", 2000)
}
