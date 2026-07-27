document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("rooms-container");

    if (!container) return;

    fetch("data/rooms.json")
        .then(response => response.json())
        .then(rooms => {

            container.innerHTML = "";

            rooms.forEach(room => {

                const features = room.features
                    .map(feature => `<li>${feature}</li>`)
                    .join("");

                container.innerHTML += `
                    <article class="room-card">

                        <div class="room-image">
                            <img src="${room.image}" alt="${room.title}">
                        </div>

                        <div class="room-content">

                            <span class="availability">
                                ${room.status}
                            </span>

                            <h3>${room.title}</h3>

                            <p>
                                <strong>${room.city}</strong><br>
                                ${room.location}
                            </p>

                            <p>${room.description}</p>

                            <ul class="room-features">
                                ${features}
                            </ul>

                            <div class="room-price">
                                $${room.price.toLocaleString()} MXN / mes
                            </div>

                            <a
                                href="https://wa.me/524461048399"
                                class="btn btn-primary room-btn"
                                target="_blank"
                            >
                                Solicitar información
                            </a>

                        </div>

                    </article>
                `;
            });

        })
        .catch(error => {
            console.error("Error cargando rooms.json:", error);
        });

        container.innerHTML = html;

// Inicializar galería después de crear las habitaciones
                   initGallery();

});