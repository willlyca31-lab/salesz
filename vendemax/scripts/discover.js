
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

const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const currentDate = Date.now();

if (!lastVisit) {

    message.textContent =
        "¡Bienvenido a VendeMax!";

} else {

    const milliseconds = currentDate - Number(lastVisit);

    const daysBetween = Math.floor(
        milliseconds / 1000 / 60 / 60 / 24
    );

    if (daysBetween < 1) {

        message.textContent =
            "¡Qué bueno verte de nuevo!";

    } else if (daysBetween === 1) {

        message.textContent =
            "Tu última visita fue hace 1 día.";

    } else {

        message.textContent =
            `Tu última visita fue hace ${daysBetween} días.`;
    }
}

localStorage.setItem("lastVisit", currentDate);
