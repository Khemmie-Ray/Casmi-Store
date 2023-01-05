const imageContainer = document.querySelector(".col-1")

const link = "https://api.unsplash.com/search/photos?query=fashion&per_page=20&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU"

fetch(link, {
    cache: "force-cache"
})
.then(response => response.json())
.then(data => {
    console.log(data.results)

    const products = data.results.map((product) => {

        return `<div class="card" onclick='getProduct(${JSON.stringify(product)})'><img src=${product.urls.small} alt="" class="cardImg" data-id=${product.id}/></div>`;
      });
  
      imageContainer.innerHTML = products.join(" ");
    });

    
  const getProduct = (product) => {
    console.log(product)
    localStorage.setItem("product", JSON.stringify(product))
    const url = window.location.href.replace("shop.html", "product.html");
    window.location.href = url;
  }

   
    // for (let i = 0; i < 15; i++) {
    //     let result = data.photos[i].src.tiny;
    //     let designer = data.photos[i].photographer;
    //     let imgEl = document.createElement("img")

    //     imgEl.setAttribute(
    //         "src",
    //         `${result}`
    //     );

    //     imageContainer.appendChild(imgEl);

        
    //     imgEl.onclick = function handleClick() {
    //         console.log(designer)
    //         // location.href = `${result}`
    //         // window.location.href = "product.html"

    //       imageContainer.innerHTML = `<div>
    //             <img src=${result} alt="">
    //             <div>
    //             <p>Store by: ${designer}
    //             <p>$ ${randomPrice}</p>
    //             </div>
    //             <button onclick='() => console.log("Yes")'>Add to Cart</button>
    //             </div>`
    //     }
    //     }    



