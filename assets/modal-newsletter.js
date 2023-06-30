(function(document) {

    let selectors = {
        modalNewsletter: '.newsletter-modal',
        modalNewsletterContent: '.newsletter-modal__content',
        modalClose: '.close-modal-newsletter',
        buttonsNewsletter: '.btn-open-newsletter',
        newsletterSubmit: '.newsletter__submit',
    };
  
    let modalNewsletter = document.querySelector(selectors.modalNewsletter)
    let modalNewsletterContent = document.querySelector(selectors.modalNewsletterContent)
    let modalClose = document.querySelector(selectors.modalClose)
    let buttonsNewsletter = document.querySelectorAll(selectors.buttonsNewsletter)
    let newsletterSubmit = document.querySelectorAll(selectors.newsletterSubmit)

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let paramOpenNewsletterPosted = urlParams.get('customer_posted')
    let paramOpenNewsletterError = urlParams.get('contact[tags]')

    let modalNewsletterOpenOnLOad = modalNewsletter.getAttribute("attr-open-onload")

    if ((sessionStorage.getItem("openNewsletter") !== "close") && (modalNewsletterOpenOnLOad == "true") ){
      modalNewsletter.classList.remove("hide")
    }

    if (sessionStorage.getItem("newsletter") == "submit") {
      if ((paramOpenNewsletterPosted == "true") || (paramOpenNewsletterError == "newsletter")) {
        setTimeout(function(){
          buttonsNewsletter[0].click()
        }, 200);
        sessionStorage.removeItem("newsletter");
      }
    }

    modalClose.addEventListener("click", function(){
        modalNewsletter.classList.add("hide")
        sessionStorage.setItem("openNewsletter", "close")
    })

    buttonsNewsletter.forEach((buttonNewsletter) => {
      buttonNewsletter.addEventListener("click", function(){
          modalNewsletter.classList.remove("hide")
      })
    })
    newsletterSubmit.forEach((newsletterSubmit_single) => {
      newsletterSubmit_single.addEventListener("click", function(){
        sessionStorage.setItem("newsletter", "submit");
      })
    })

    modalNewsletter.addEventListener('click', function(e){   

      if (!modalNewsletterContent.contains(e.target)) {
        modalNewsletter.classList.add("hide")
        sessionStorage.setItem("openNewsletter", "close")
      }

    });


})(document);
  