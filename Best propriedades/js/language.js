/* =====================================================
   BEST RENTAS DE CUARTOS
   MULTILANGUAGE SYSTEM
   Spanish / English / French
   Wilson Cardichon
===================================================== */



document.addEventListener(
    "DOMContentLoaded",
    ()=>{







const languageSelector =
document.getElementById(
    "language-selector"
);






if(!languageSelector){

    return;

}









/* =====================================================
   TRANSLATIONS DATABASE
===================================================== */



const translations = {



    es:{


        home:"Inicio",

        rooms:"Habitaciones",

        locations:"Ubicaciones",

        contact:"Contacto",


        heroTitle:
        "Encuentra tu próximo hogar",


        heroText:
        "Habitaciones cómodas, seguras y listas para vivir.",


        viewRooms:
        "Ver habitaciones",


        contactUs:
        "Contáctanos",


        send:
        "Enviar",


        whatsapp:
        "Hablar por WhatsApp",


        footer:
        "Best Rentas de Cuartos"



    },









    en:{


        home:"Home",

        rooms:"Rooms",

        locations:"Locations",

        contact:"Contact",


        heroTitle:
        "Find your next home",


        heroText:
        "Comfortable, safe rooms ready to move in.",


        viewRooms:
        "View rooms",


        contactUs:
        "Contact us",


        send:
        "Send",


        whatsapp:
        "Chat on WhatsApp",


        footer:
        "Best Room Rentals"



    },









    fr:{


        home:"Accueil",

        rooms:"Chambres",

        locations:"Emplacements",

        contact:"Contact",


        heroTitle:
        "Trouvez votre prochain logement",


        heroText:
        "Des chambres confortables et sécurisées.",


        viewRooms:
        "Voir les chambres",


        contactUs:
        "Contactez-nous",


        send:
        "Envoyer",


        whatsapp:
        "Parler sur WhatsApp",


        footer:
        "Best Location de Chambres"



    }



};









/* =====================================================
   LOAD SAVED LANGUAGE
===================================================== */



const savedLanguage =
localStorage.getItem(
    "language"
);






if(savedLanguage){



    languageSelector.value =
    savedLanguage;



    changeLanguage(
        savedLanguage
    );



}









/* =====================================================
   CHANGE LANGUAGE EVENT
===================================================== */



languageSelector.addEventListener(
    "change",
    ()=>{



        const selected =
        languageSelector.value;





        localStorage.setItem(
            "language",
            selected
        );






        changeLanguage(
            selected
        );



    }
);









/* =====================================================
   TRANSLATE PAGE
===================================================== */



function changeLanguage(
    lang
){



    const elements =
    document.querySelectorAll(
        "[data-translate]"
    );







    elements.forEach(
        element=>{





            const key =
            element.dataset.translate;






            if(
                translations[lang][key]
            ){



                element.textContent =
                translations[lang][key];



            }



        }
    );







}









    }
);