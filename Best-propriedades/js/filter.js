/* =====================================================
   BEST RENTAS DE CUARTOS
   ROOM FILTER SYSTEM
   Wilson Cardichon
===================================================== */



document.addEventListener(
    "DOMContentLoaded",
    ()=>{







/* =====================================================
   SELECT ELEMENTS
===================================================== */



const searchInput =
document.getElementById(
    "search-room"
);





const cityFilter =
document.getElementById(
    "city-filter"
);





const priceFilter =
document.getElementById(
    "price-filter"
);





const availabilityFilter =
document.getElementById(
    "availability-filter"
);





const rooms =
document.querySelectorAll(
    ".room-card"
);








const counter =
document.getElementById(
    "room-counter"
);









if(
    rooms.length === 0
){

    return;

}









/* =====================================================
   FILTER FUNCTION
===================================================== */


function filterRooms(){



    let visibleRooms = 0;







    rooms.forEach(
        room=>{





            const title =
            room
            .querySelector(
                "h3,h4"
            )
            ?.textContent
            .toLowerCase();







            const location =
            room
            .querySelector(
                ".location"
            )
            ?.textContent
            .toLowerCase();







            const priceText =
            room
            .querySelector(
                ".room-price"
            )
            ?.textContent
            ||
            "";







            const status =
            room
            .querySelector(
                ".availability"
            )
            ?.textContent
            .toLowerCase();







            const searchValue =
            searchInput
            ?
            searchInput.value
            .toLowerCase()
            :
            "";







            const cityValue =
            cityFilter
            ?
            cityFilter.value.toLowerCase()
            :
            "";








            const priceValue =
            priceFilter
            ?
            priceFilter.value
            :
            "";







            const availabilityValue =
            availabilityFilter
            ?
            availabilityFilter.value
            :
            "";









            let show =
            true;









            // SEARCH



            if(
                searchValue &&
                !title.includes(searchValue) &&
                !location.includes(searchValue)
            ){


                show=false;


            }









            // CITY



            if(
                cityValue &&
                !location.includes(cityValue)
            ){


                show=false;


            }









            // AVAILABILITY



            if(
                availabilityValue &&
                !status.includes(
                    availabilityValue
                )
            ){


                show=false;


            }









            // PRICE



            if(priceValue){



                const price =
                Number(
                    priceText.replace(
                        /\D/g,
                        ""
                    )
                );






                if(
                    priceValue==="low" &&
                    price>4000
                ){


                    show=false;


                }







                if(
                    priceValue==="medium" &&
                    (
                        price<4000 ||
                        price>6000
                    )
                ){


                    show=false;


                }








                if(
                    priceValue==="high" &&
                    price<6000
                ){


                    show=false;


                }



            }









            if(show){



                room.style.display =
                "block";



                visibleRooms++;





            }else{



                room.style.display =
                "none";



            }





        }
    );








    if(counter){



        counter.textContent =

        visibleRooms
        +
        " habitaciones encontradas";



    }








}









/* =====================================================
   EVENTS
===================================================== */



if(searchInput){


    searchInput.addEventListener(
        "input",
        filterRooms
    );


}








if(cityFilter){


    cityFilter.addEventListener(
        "change",
        filterRooms
    );


}







if(priceFilter){


    priceFilter.addEventListener(
        "change",
        filterRooms
    );


}







if(availabilityFilter){


    availabilityFilter.addEventListener(
        "change",
        filterRooms
    );


}









    }
);