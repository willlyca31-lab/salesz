/* =====================================================
   BEST RENTAS DE CUARTOS
   IMAGE GALLERY SYSTEM
   Wilson Cardichon
===================================================== */



document.addEventListener(
    "DOMContentLoaded",
    ()=>{







/* =====================================================
   SELECT IMAGES
===================================================== */



const galleryImages =
document.querySelectorAll(
    ".gallery-item img, .room-image img"
);






if(
    galleryImages.length === 0
){

    return;

}









/* =====================================================
   CREATE MODAL
===================================================== */



const modal =
document.createElement(
    "div"
);





modal.className =
"gallery-modal";






modal.innerHTML = `


    <button class="gallery-close">

        <i class="fa-solid fa-xmark"></i>

    </button>



    <button class="gallery-prev">

        <i class="fa-solid fa-chevron-left"></i>

    </button>





    <img class="gallery-preview">





    <button class="gallery-next">

        <i class="fa-solid fa-chevron-right"></i>

    </button>



`;







document.body.appendChild(
    modal
);









const preview =
modal.querySelector(
    ".gallery-preview"
);





const close =
modal.querySelector(
    ".gallery-close"
);





const next =
modal.querySelector(
    ".gallery-next"
);





const prev =
modal.querySelector(
    ".gallery-prev"
);









let currentIndex = 0;






const images =
Array.from(
    galleryImages
);









/* =====================================================
   OPEN IMAGE
===================================================== */



images.forEach(
    (image,index)=>{





        image.style.cursor =
        "pointer";





        image.addEventListener(
            "click",
            ()=>{



                currentIndex =
                index;





                showImage();



                modal.classList.add(
                    "active"
                );



            }
        );



    }
);









/* =====================================================
   SHOW IMAGE
===================================================== */


function showImage(){



    preview.src =
    images[currentIndex].src;



}









/* =====================================================
   NEXT IMAGE
===================================================== */



next.addEventListener(
    "click",
    ()=>{



        currentIndex++;





        if(
            currentIndex >= images.length
        ){



            currentIndex = 0;



        }






        showImage();



    }
);









/* =====================================================
   PREVIOUS IMAGE
===================================================== */



prev.addEventListener(
    "click",
    ()=>{



        currentIndex--;





        if(
            currentIndex < 0
        ){



            currentIndex =
            images.length - 1;



        }






        showImage();



    }
);









/* =====================================================
   CLOSE MODAL
===================================================== */



close.addEventListener(
    "click",
    ()=>{


        modal.classList.remove(
            "active"
        );


    }
);








modal.addEventListener(
    "click",
    (event)=>{



        if(
            event.target === modal
        ){



            modal.classList.remove(
                "active"
            );



        }



    }
);









/* =====================================================
   KEYBOARD CONTROL
===================================================== */



document.addEventListener(
    "keydown",
    (event)=>{





        if(
            !modal.classList.contains(
                "active"
            )
        ){

            return;

        }







        if(
            event.key === "Escape"
        ){



            modal.classList.remove(
                "active"
            );



        }







        if(
            event.key === "ArrowRight"
        ){



            next.click();



        }








        if(
            event.key === "ArrowLeft"
        ){



            prev.click();



        }





    }
);









    }
);

