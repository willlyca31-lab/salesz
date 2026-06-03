
import { places } from "../data/items.mjs";

const container = document.querySelector("#items-container");

places.forEach((place, index) => {

    const card = document.createElement("article");

    card.classList.add("card");
    card.classList.add(`card${index + 1}`);

    card.innerHTML = `

        <h2>${place.title}</h2>

        <figure>

            <img
                src="${place.image}"
                alt="${place.title}"
                loading="lazy"
                width="300"
                height="200">

        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>
            Ver Productos
        </button>
    `;

    container.appendChild(card);

});

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    menuButton.classList.toggle("open");
});


// CURRENT YEAR

const year = document.querySelector("#currentyear");

year.textContent = new Date().getFullYear();


// LAST MODIFIED

const lastModified = document.querySelector("#lastModified");

lastModified.textContent =
    `Última actualización: ${document.lastModified}`;
