
import { getProducts } from "./services.js";

const container = document.getElementById("products-container");
const searchInput = document.getElementById("searchInput");

let allProducts = [];

function displayProducts(products){

  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button class="btn" onclick="addToCart(${product.id})">
          Agregar
        </button>
      </div>
    `;

  });

}

window.addToCart = function(id){

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = allProducts.find(p => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Producto agregado");
}

async function init(){

  allProducts = await getProducts();

  displayProducts(allProducts);
}

searchInput.addEventListener("input",(e)=>{

  const text = e.target.value.toLowerCase();

  const filtered = allProducts.filter(product =>
    product.name.toLowerCase().includes(text)
  );

  displayProducts(filtered);

});

init();
