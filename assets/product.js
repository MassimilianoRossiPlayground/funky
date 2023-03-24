(function(document) {

    let selectors = {

      bodyTemplate: 'body.template-product',

      mob_swiperPdp: '.product-single-pdp__mob-images .swiper-container',
      mob_swiperPdpPagination: '.product-single-pdp__mob-images .swiper-pagination',
      mob_swiperPdpNavigatioNext: '.product-single-pdp__mob-images .swiper-button-next',
      mob_swiperPdpNavigatioPrev: '.product-single-pdp__mob-images .swiper-button-prev',

      desk_swiperPdp: '.product-single-pdp__desk-images .swiper-container',
      desk_swiperPdpPagination: '.product-single-pdp__desk-images .swiper-pagination',
      desk_swiperPdpNavigatioNext: '.product-single-pdp__desk-images .swiper-button-next',
      desk_swiperPdpNavigatioPrev: '.product-single-pdp__desk-images .swiper-button-prev',

      desk_swiperPdpImages: '.product-single-pdp__desk-images .swiper-container img',
      desk_swiperPdpImagesMob: '.product-single-pdp__mob-images .swiper-container img',

      productOptions__select: 'select.single-option-selector',
      productOptions__selectOptions: 'select.single-option-selector option',
      productOptions: '.product-variant-grid',
      productOptions__group: '.product-variant-grid .product-option',
      productFormGroupSubmit: '.product-form__controls-group--submit',
      productForm:'form[data-product-form]',
      shopifyPaymentButton: '.shopify-payment-button',
      selectionMessage: '.product-select-message',
      singleOptionSelector: '.single-option-selector',

      modalOpens: '.modal-open-js',
      pdpModal: '.pdp-modal',
      pdpModalContent: '.pdp-modal__content',
      pdpModalDatas: '.pdp-modal__data',
      modalClose: '.close-modal',

      pdpModalImage: '.pdp-modal-product-image',
      pdpModalImageImg: '.pdp-modal-product-image img',
      pdpModalImageClose: '.close-modal-image',
    };

    let bodyTemplate = document.querySelector(selectors.bodyTemplate)
    let mob_swiperPdp = document.querySelector(selectors.mob_swiperPdp)
    let mob_swiperPdpPagination = document.querySelector(selectors.mob_swiperPdpPagination)
    let mob_swiperPdpNavigatioNext = document.querySelector(selectors.mob_swiperPdpNavigatioNext)
    let mob_swiperPdpNavigatioPrev = document.querySelector(selectors.mob_swiperPdpNavigatioPrev)
    let desk_swiperPdp = document.querySelector(selectors.desk_swiperPdp)
    let desk_swiperPdpPagination = document.querySelector(selectors.desk_swiperPdpPagination)
    let desk_swiperPdpNavigatioNext = document.querySelector(selectors.desk_swiperPdpNavigatioNext)
    let desk_swiperPdpNavigatioPrev = document.querySelector(selectors.desk_swiperPdpNavigatioPrev)
    let desk_swiperPdpImages = document.querySelectorAll(selectors.desk_swiperPdpImages)
    let desk_swiperPdpImagesMob = document.querySelectorAll(selectors.desk_swiperPdpImagesMob)
    let productOptions__select = document.querySelector(selectors.productOptions__select)
    let productOptions__selectOptions = document.querySelectorAll(selectors.productOptions__selectOptions)
    let productOptions = document.querySelector(selectors.productOptions)
    let productOptions__group = document.querySelectorAll(selectors.productOptions__group)
    let productFormGroupSubmit = document.querySelector(selectors.productFormGroupSubmit)
    let productForm = document.querySelector(selectors.productForm)
    let shopifyPaymentButton = document.querySelector(selectors.shopifyPaymentButton)
    let selectionMessage = document.querySelector(selectors.selectionMessage)
    let singleOptionSelector = document.querySelector(selectors.singleOptionSelector)
    let modalOpens = document.querySelectorAll(selectors.modalOpens)
    let pdpModal = document.querySelector(selectors.pdpModal)
    let pdpModalContent = document.querySelector(selectors.pdpModalContent)
    let pdpModalDatas = document.querySelectorAll(selectors.pdpModalDatas)
    let modalClose = document.querySelectorAll(selectors.modalClose)
    let pdpModalImage = document.querySelector(selectors.pdpModalImage)
    let pdpModalImageImg = document.querySelector(selectors.pdpModalImageImg)
    let pdpModalImageClose = document.querySelector(selectors.pdpModalImageClose)


    window.addEventListener("load", (event) => {

        if (shopifyPaymentButton) {
          shopifyPaymentButton.setAttribute('disabled', true)
        }

        var swiper_pdp_mob = new Swiper(mob_swiperPdp, {
          slidesPerView: 1,
          pagination: {
            el: mob_swiperPdpPagination,
            clickable: true,
          },
          navigation: {
            nextEl: mob_swiperPdpNavigatioNext,
            prevEl: mob_swiperPdpNavigatioPrev,
          }
        });
        var swiper_pdp_desk = new Swiper(desk_swiperPdp, {
          slidesPerView: 1,
          pagination: {
            el: desk_swiperPdpPagination,
            clickable: true,
          },
          navigation: {
            nextEl: desk_swiperPdpNavigatioNext,
            prevEl: desk_swiperPdpNavigatioPrev,
          }
        });



        productOptions__group.forEach(function(productOption__single) {
          productOption__single.addEventListener("click", function(){

            productOptions.classList.remove("noselection")
            if (shopifyPaymentButton) {
              shopifyPaymentButton.setAttribute('disabled', false)
            }
            selectionMessage.classList.remove("show")

            productOptions__group.forEach((productOption__single__check) => {
              productOption__single__check.classList.remove('selected');
            });

            let attrOption__single = productOption__single.getAttribute("value")

            productOptions__selectOptions.forEach(function(productOption__selectOption) {

              let attrOption__selectOption = productOption__selectOption.getAttribute("value")

              if (attrOption__selectOption == attrOption__single) {
                console.log(attrOption__selectOption)
                productOption__single.classList.add("selected")
                productOptions__select.value = attrOption__selectOption
                productOptions__select.dispatchEvent(new Event('change'));
              } 

            })

          })
        })
        if (productOptions__group.length == 1) {
          productOptions__group.forEach(function(productOption__single__simulate) {
            console.log("click")
            productOption__single__simulate.click()
          })
        }

        productForm.addEventListener(
          'submit',
          function(evt) {
            evt.stopPropagation();

            let variantSelected = false

            productOptions__group.forEach((productOption__single__check) => {
              if (productOption__single__check.classList.contains("selected")) {
                variantSelected = true
              }
            });

            if (variantSelected) {
              return true
            } else {
              if (singleOptionSelector) {
                selectionMessage.classList.add("show")
                setTimeout(function(){selectionMessage.classList.remove("show")}, 3000)
                return false
              }
            }
        })

        bodyTemplate.appendChild(pdpModal)
    })


    modalOpens.forEach(function(modalOpen) {
      modalOpen.addEventListener("click", function(){

        let dataModal = modalOpen.getAttribute("data-modal")
        let pdpModalContent = pdpModal.querySelector(".pdp-modal__data[data-modal='"+dataModal+"']")

        pdpModal.classList.remove("hide")

        pdpModalDatas.forEach(function(pdpModalData) {
          pdpModalData.classList.add("hide")
        })

        pdpModalContent.classList.remove("hide")

      })
    })

    function closeModal() {
      pdpModalDatas.forEach(function(pdpModalData) {
        pdpModalData.classList.add("hide")
      })
      pdpModal.classList.add("hide")
    }

    pdpModal.addEventListener('click', function(e) {   
      if (!pdpModalContent.contains(e.target)){
        closeModal()
      }
    });

    modalClose.forEach(modalCloseSingle => {
      modalCloseSingle.addEventListener("click", function() {
        closeModal()
      })
    })

    desk_swiperPdpImages.forEach(desk_swiperPdpImage => {

      desk_swiperPdpImage.addEventListener("click", function() {
        console.log("open image")
        pdpModalImageImg.setAttribute("src", "")
        let imageSrc = desk_swiperPdpImage.getAttribute("src")
        pdpModalImageImg.setAttribute("src", imageSrc)
  
        pdpModalImage.classList.remove("hide")
      })

    })

    desk_swiperPdpImagesMob.forEach(desk_swiperPdpImageMob => {

      desk_swiperPdpImageMob.addEventListener("click", function() {
        console.log("open image")
        pdpModalImageImg.setAttribute("src", "")
        let imageSrc = desk_swiperPdpImageMob.getAttribute("src")
        pdpModalImageImg.setAttribute("src", imageSrc)
  
        pdpModalImage.classList.remove("hide")
      })

    })

    pdpModalImageClose.addEventListener("click", function() {
      pdpModalImage.classList.add("hide")
    })
    pdpModalImageImg.addEventListener("click", function() {
      pdpModalImage.classList.add("hide")
    })


})(document);
  