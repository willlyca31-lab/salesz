/* =====================================================
   BEST RENTAS DE CUARTOS
   DARK MODE SYSTEM
   Wilson Cardichon
===================================================== */



document.addEventListener(
    "DOMContentLoaded",
    () => {



        const darkButton =
        document.getElementById(
            "dark-mode-toggle"
        );





        const body =
        document.body;





        const icon =
        darkButton?.querySelector(
            "i"
        );









        /* =============================================
           LOAD SAVED MODE
        ============================================= */



        const savedMode =
        localStorage.getItem(
            "darkMode"
        );






        if(
            savedMode === "enabled"
        ){



            body.classList.add(
                "dark-mode"
            );





            changeIcon(
                true
            );



        }









        /* =============================================
           BUTTON ACTION
        ============================================= */



        if(darkButton){



            darkButton.addEventListener(
                "click",
                ()=>{



                    body.classList.toggle(
                        "dark-mode"
                    );






                    const enabled =
                    body.classList.contains(
                        "dark-mode"
                    );






                    if(enabled){



                        localStorage.setItem(
                            "darkMode",
                            "enabled"
                        );



                    }else{



                        localStorage.setItem(
                            "darkMode",
                            "disabled"
                        );



                    }







                    changeIcon(
                        enabled
                    );



                }
            );



        }









        /* =============================================
           CHANGE ICON
        ============================================= */



        function changeIcon(
            dark
        ){



            if(!icon)
            return;





            if(dark){



                icon.classList.remove(
                    "fa-moon"
                );



                icon.classList.add(
                    "fa-sun"
                );



            }else{



                icon.classList.remove(
                    "fa-sun"
                );



                icon.classList.add(
                    "fa-moon"
                );



            }



        }









    }
);

