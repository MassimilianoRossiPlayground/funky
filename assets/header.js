(function(document) {

    var selectors = {
        mobileNavLangs: '.mobile-nav-tools__langs'
        
    };
  
    var mobileNavLangs = document.querySelector(selectors.mobileNavLangs);
   
  
    if (mobileNavLangs) {
        mobileNavLangs.addEventListener("click", function(){
            if (mobileNavLangs.classList.contains("open")) {
                mobileNavLangs.classList.remove("open")
            } else {
                mobileNavLangs.classList.add("open")  
            }
        });
    }


})(document);
  