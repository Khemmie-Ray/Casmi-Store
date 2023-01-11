window.addEventListener("DOMContentLoaded", fetchProducts);
const cardimages = document.querySelector(".cardImg");

const link =
  "https://api.unsplash.com/search/photos?query=fashion&per_page=20&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU";

  // The function that redirects to the product page when an item is clicked on

function getProduct(event) {
  const data = JSON.parse(localStorage.getItem("Products"));
  const id = event.currentTarget.getAttribute("data-id");
  const product = data.find((product) => product.id === id);
  localStorage.setItem("product", JSON.stringify(product));
  const url = window.location.href.replace("shop.html", "product.html");
  window.location.href = url;
}

// function for making request calls to the Unsplash API

function fetchProducts() {
  fetch(link, {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("Products", JSON.stringify(data.results));

      const products = data.results.map((product) => {
        return `<div class="card" onclick='getProduct(event)' data-id="${product.id}">
                  <img src=${product.urls.small} alt="" class="cardImg"/>
                </div>`;
      });

      const imageContainer = document.querySelector(".col-1");
      imageContainer.innerHTML = products.join(" ");
    });
}
