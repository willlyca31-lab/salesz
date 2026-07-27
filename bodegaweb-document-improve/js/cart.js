
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearBtn = document.getElementById("clear-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart(){

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `;
  });

  cartTotal.textContent = "Total: $" + total;
}

clearBtn.addEventListener("click",()=>{

  localStorage.removeItem("cart");

  cart = [];

  displayCart();
});

displayCart();
