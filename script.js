
const toSearch = document.querySelector("#search");
const exploreImg = document.querySelector('#eImg')


toSearch.addEventListener("change", function (event) {
    let dataOption = event.target.value;
    console.log(dataOption)

    const url = `https://api.unsplash.com/search/photos?query=${dataOption}&per_page=20&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU`;

    fetch(url, {
        cache: "force-cache"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        const products = data.results.map((product) => {
            return `
            <div class="card" onclick='getProduct(${JSON.stringify(product)})'>
            <img src=${product.urls.small_s3} alt="" class="cardImg" data-id=${product.id}/></div>`;
          });
      
          exploreImg.innerHTML = products.join("");
    });

    // const getProduct = (product) => {
    //     console.log(product)
    //     localStorage.setItem("product", JSON.stringify(product))
    //     const url = window.location.href.replace("shop.html", "product.html");
    //     window.location.href = url;
    //   }
})
