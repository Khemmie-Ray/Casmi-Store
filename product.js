const product = JSON.parse(localStorage.getItem("product"));
            console.log(product);
const productContainer = document.querySelector(".product-container");
const productName = productContainer.querySelector(".product-name").textContent = "Product " + product.id; 
const productImg = productContainer.querySelector(".product-img img").src = product.src.portrait;
const randomPrice = Math.floor(Math.random() * 300)
const productDescription = productContainer.querySelector(".product-description").textContent = product.alt;
const productPrice = productContainer.querySelector(".product-price").textContent = `$${randomPrice}`