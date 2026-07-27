/* =====================================================
   BEST RENTAS DE CUARTOS
   MAIN JAVASCRIPT
   Wilson Cardichon
===================================================== */



document.addEventListener(
    "DOMContentLoaded",
    () => {




/* =====================================================
   MOBILE MENU
===================================================== */


const menuToggle = document.querySelector(
    ".menu-toggle"
);



const navMenu = document.querySelector(
    ".nav-menu"
);




if(menuToggle && navMenu){



    menuToggle.addEventListener(
        "click",
        () => {



            navMenu.classList.toggle(
                "active"
            );



        }
    );


}









/* =====================================================
   CLOSE MOBILE MENU
===================================================== */



const navLinks = document.querySelectorAll(
    ".nav-menu a"
);





navLinks.forEach(
    link => {



        link.addEventListener(
            "click",
            () => {



                if(navMenu){


                    navMenu.classList.remove(
                        "active"
                    );


                }



            }
        );



    }
);









/* =====================================================
   AUTOMATIC FOOTER YEAR
===================================================== */



const year = document.getElementById(
    "year"
);





if(year){


    year.textContent =
    new Date().getFullYear();



}









/* =====================================================
   SCROLL TOP BUTTON
===================================================== */


const scrollButton =
document.querySelector(
    ".scroll-top"
);





if(scrollButton){



    window.addEventListener(
        "scroll",
        () => {



            if(window.scrollY > 400){



                scrollButton.classList.add(
                    "show"
                );



            }else{



                scrollButton.classList.remove(
                    "show"
                );


            }



        }
    );







    scrollButton.addEventListener(
        "click",
        () => {



            window.scrollTo({


                top:0,


                behavior:"smooth"



            });



        }
    );



}









/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */


document.querySelectorAll(
    'a[href^="#"]'
)
.forEach(
    anchor => {



        anchor.addEventListener(
            "click",
            function(e){



                const target =
                document.querySelector(
                    this.getAttribute("href")
                );





                if(target){



                    e.preventDefault();




                    target.scrollIntoView({



                        behavior:"smooth"



                    });



                }



            }
        );



    }
);









/* =====================================================
   CONTACT FORM
===================================================== */



const contactForm =
document.getElementById(
    "contact-form"
);






if(contactForm){



    contactForm.addEventListener(
        "submit",
        (event)=>{



            event.preventDefault();





            const name =
            document.getElementById(
                "name"
            ).value;





            const email =
            document.getElementById(
                "email"
            ).value;







            if(
                name === "" ||
                email === ""
            ){



                alert(
                    "Por favor completa los campos obligatorios."
                );


                return;



            }








            alert(

                "Gracias "
                +
                name
                +
                ". Tu solicitud fue enviada correctamente."

            );







            contactForm.reset();



        }
    );



}









/* =====================================================
   SCROLL ANIMATION
===================================================== */



const animatedElements =
document.querySelectorAll(
    ".feature-card, .room-card, .testimonial-card"
);








const observer =
new IntersectionObserver(
    entries => {



        entries.forEach(
            entry => {



                if(
                    entry.isIntersecting
                ){



                    entry.target.classList.add(
                        "fade-in"
                    );



                }



            }
        );



    },
    {

        threshold:
        0.15

    }
);








animatedElements.forEach(
    element => {



        observer.observe(
            element
        );



    }
);









/* =====================================================
   BUTTON HOVER EFFECT
===================================================== */


const buttons =
document.querySelectorAll(
    ".btn"
);





buttons.forEach(
    button => {



        button.addEventListener(
            "mouseenter",
            ()=>{


                button.style.transform =
                "translateY(-3px)";


            }
        );





        button.addEventListener(
            "mouseleave",
            ()=>{


                button.style.transform =
                "translateY(0)";


            }
        );



    }
);









    }
);