(function(document) {

    let selectors = {
        modaliscrizione: '.iscrizione-modal',
        modaliscrizioneContent: '.iscrizione-modal__content',
        modalClose: '.close-modal-iscrizione',
        buttonsiscrizione: '.btn-open-iscrizione',
        buttonsiscrizioneLink: '.buttons__btn__link-js',
    };
  
    let modaliscrizione = document.querySelector(selectors.modaliscrizione)
    let modaliscrizioneContent = document.querySelector(selectors.modaliscrizioneContent)
    let modalClose = document.querySelector(selectors.modalClose)
    let buttonsiscrizione = document.querySelectorAll(selectors.buttonsiscrizione)
    let buttonsiscrizioneLink = document.querySelectorAll(selectors.buttonsiscrizioneLink)

    buttonsiscrizioneLink.forEach((buttoniscrizioneLink) => {
      buttoniscrizioneLink.addEventListener("click", function(){
        console.log("click")
          let checkModal = buttoniscrizioneLink.getAttribute("href")
          if (checkModal == "#modal") {
            modaliscrizione.classList.remove("hide")
          }
      })
    })

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let paramOpeniscrizionePosted = urlParams.get('contact_posted')
    let paramOpeniscrizioneError = urlParams.get('contact[tags]')

    if ((paramOpeniscrizionePosted == "true") || (paramOpeniscrizioneError == "iscrizione")) {
      setTimeout(function(){
        buttonsiscrizioneLink[0].click()
      }, 200);
    }

    modalClose.addEventListener("click", function(){
        modaliscrizione.classList.add("hide")
    })

    buttonsiscrizione.forEach((buttoniscrizione) => {
      buttoniscrizione.addEventListener("click", function(){
          modaliscrizione.classList.remove("hide")
      })
    })

    modaliscrizione.addEventListener('click', function(e){   

      if (!modaliscrizioneContent.contains(e.target)) {
        modaliscrizione.classList.add("hide")
      }

      
    });


})(document);
  