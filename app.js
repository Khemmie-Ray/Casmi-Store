const productP = document.querySelector("#product")
const imageContainer = document.querySelector(".col-1")

const link = "https://api.pexels.com/v1/search?query=fashion";

fetch(link, {
    headers: {
        Authorization: "563492ad6f91700001000001e5d5954abf8346b5855754a95ff3cd2d"
    },
    cache: "force-cache"
})
.then(response => response.json())
.then(data => {
    console.log(data.photos)
    // console.log(data.next_page)

    const products = data.photos.map((product) => {
        return `<div class="card" onclick='getProduct(${JSON.stringify(product)})'><img src=${
          product.src.portrait
        } alt="" class="cardImg" data-id=${product.id}/></div>`;
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



