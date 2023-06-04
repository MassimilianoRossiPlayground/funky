(function(document) {
    
    var selectors = {
        pageContainer: '.page-container',
        siteHeader: '.site-header',
        collectionDescription: '.collection-description',
      };
    
      let pageContainer = document.querySelector(selectors.pageContainer);
      let siteHeader = document.querySelector(selectors.siteHeader);
      let collectionDescription = document.querySelector(selectors.collectionDescription);
  
      let offsetMore = 40
      let collectionDescriptionHeight = 0

      addEventListener("load", (event) => {
        if (collectionDescription) {
          collectionDescriptionHeight = collectionDescription.offsetHeight
        }
        if (window.innerWidth > 1024) {
          offsetMore = 30
        }

        let marginTopContainer = collectionDescriptionHeight + offsetMore

        pageContainer.style.marginTop = marginTopContainer + "px";
      })

})(document);
  