(function(document) {


    let selectors = {
        swiperTwiBoxes: '.sliders-box',
    }

    let swiperTwiBoxes = document.querySelectorAll(selectors.swiperTwiBoxes)

    window.addEventListener("load", (event) => {

        if (swiperTwiBoxes) {
            swiperTwiBoxes.forEach(function(swiperTwiBox, i) {
    
                let swiperContainer = swiperTwiBox.querySelector(".swiper-container")

                swiperTwiBox.classList.add("sliders-box--" + i)
    
                var swiper_slider = new Swiper(swiperContainer, {
                    slidesPerView: 1,
                    pagination: {
                        el: ".sliders-box--" + i + " .swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".sliders-box--" + i + " .swiper-button-next",
                        prevEl: ".sliders-box--" + i + " .swiper-button-prev",
                    }
                });
            })
        }
    })





})(document);
  