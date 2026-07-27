
const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cart-count");

let cart = 0;

function displayProducts(items){
    productsContainer.innerHTML = "";

    items.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="price">$${product.price}</div>
            <div class="product-name">${product.name}</div>
            <button class="add-btn">Agregar</button>
        `;

        const btn = card.querySelector(".add-btn");

        btn.addEventListener("click", () => {
            cart++;
            cartCount.textContent = cart;
        });

        productsContainer.appendChild(card);
    });
}

displayProducts(products);

searchInput.addEventListener("input", (e) => {

    const text = e.target.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(text)
    );

    displayProducts(filtered);
});
