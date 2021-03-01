/*DUY-JS*/
$('.owl-carousel').owlCarousel({
        items: 4,
        loop: false,
        nav: true,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                center: true,
                autoWidth: true,
                margin: 60
            },
            539: {
                // items: 2,
                // margin: 0,
                // autoWidth: true,
                // nav: true
                items: 1,
                nav: true,
                center: true,
                autoWidth: true,
                margin: 125
            },
            767: {
                items: 2,
                margin: 200,
                autoWidth: true,

                nav: true
            },
            1023: {
                items: 3,
                margin: 95,
                autoWidth: true,
                nav: true
            },
            1200: {
                items: 4,
                nav: true,
                margin: 20,

                loop: false
            }
        }
    })
    /*END DUY-JS*/

// Thanh

var typeroom = document.querySelector("header nav ul li.typeroom a");
var link = typeroom.getAttribute("href");

function remove_href() {
    if (window.innerWidth < 700)
        typeroom.removeAttribute("href");
    else {
        typeroom.setAttribute("href", link);
    }
}

// end- Thanh