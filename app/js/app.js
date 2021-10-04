document.addEventListener('DOMContentLoaded', () => {

    var MainSlider = new Swiper('.portfolio-slider', {
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.custom-swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' &boxh; ' +
                    '<span class="' + totalClass + '"></span>';
            },
        },

        navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
        },
    });

    var servicePortfolio = new Swiper('.sliderservice', {
        autoHeight: true,
        loop: true,
        spaceBetween: 60,
        slidesPerView: 1.22,
        pagination: {
            el: '.custom-swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' &boxh; ' +
                    '<span class="' + totalClass + '"></span>';
            },
        },

        navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
        },
    });

    var servicePortfolio = new Swiper('.done-project-slider', {
        autoHeight: true,
        loop: true,
        spaceBetween: 50,
        slidesPerView: 1.23,
        pagination: {
            el: '.custom-swiper-pagination_done',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' &boxh; ' +
                    '<span class="' + totalClass + '"></span>';
            },
        },

        navigation: {
            nextEl: '.custom-swiper-button-next_done',
            prevEl: '.custom-swiper-button-prev_done',
        },
    });
    

    var offerSlider = new Swiper('.offer-slider', {
        autoHeight: true,
        loop: true,
        spaceBetween: 30,
        slidesPerGroup: 2,
        breakpoints: {
            320: {
              slidesPerView: 1
            },
            1200: {
              slidesPerView: 2
            }
        },
        pagination: {
            el: '.custom-swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' &boxh; ' +
                    '<span class="' + totalClass + '"></span>';
            },
        },

        navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
        },
    });
    


    const menu = document.querySelector('.sidenav'),
        burger = document.querySelector('.open-btn'),
        overlay = document.querySelector('.overlay'),
        closeMenu = document.querySelector('.sidenav__closebtn');

    const lockScroll = () => {
        document.body.classList.add('lock');
    }

    const unlockScroll = () => {
        document.body.classList.remove('lock');
    }

    burger.addEventListener('click', () => {
        menu.classList.add('open');
        overlay.classList.add('open');
        lockScroll();
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    });

    const particlesItems = document.querySelectorAll(".particles-bg");
    if (particlesItems.length > 0) {
        particlesItems.forEach(function (particlesItem) {
            particlesJS(particlesItem.id,
      
                {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                });
        })
    };

});