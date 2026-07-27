
import { getProducts } from "./services.js";

const featured = document.getElementById("featured-products");

async function loadFeatured(){

  const products = await getProducts();

  products.slice(0,2).forEach(product => {

    featured.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <a href="products.html" class="btn">Comprar</a>
      </div>
    `;

  });

}

loadFeatured();
