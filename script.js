/*DUY-JS*/
$('.owl-carousel').owlCarousel({
        items: 4,
        loop: false,


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
                items: 3,
                margin: 150,
                autoWidth: true,
                nav: true
            },
            1023: {
                items: 3,
                margin: 55,
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