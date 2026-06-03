

import { places } from "../data/items.mjs";


// MENU

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.classList.toggle("open");
    });
}


// CURRENT YEAR

const currentYear = document.querySelector("#currentyear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();
}


// LAST MODIFIED

const lastModified = document.querySelector("#lastModified");

if (lastModified) {

    lastModified.textContent =
        `Última actualización: ${document.lastModified}`;
}


// DISCOVER CARDS

const container =
    document.querySelector("#items-container");

if (container) {

    places.forEach((place, index) => {

        const card =
            document.createElement("article");

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
                Ver más
            </button>
        `;

        container.appendChild(card);
    });
}


// VISITOR MESSAGE

const message =
    document.querySelector("#visit-message");

if (message) {

    const lastVisit =
        localStorage.getItem("lastVisit");

    const currentDate = Date.now();

    if (!lastVisit) {

        message.textContent =
            "¡Bienvenido a VendeMax!";

    } else {

        const milliseconds =
            currentDate - Number(lastVisit);

        const daysBetween =
            Math.floor(
                milliseconds /
                1000 /
                60 /
                60 /
                24
            );

        if (daysBetween < 1) {

            message.textContent =
                "¡Has vuelto muy rápido!";

        } else if (daysBetween === 1) {

            message.textContent =
                "Tu última visita fue hace 1 día.";

        } else {

            message.textContent =
                `Tu última visita fue hace ${daysBetween} días.`;
        }
    }

    localStorage.setItem(
        "lastVisit",
        currentDate
    );
}
