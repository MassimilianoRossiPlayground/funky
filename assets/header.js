(function(document) {

    var selectors = {
        mobileNavLangs: '.mobile-nav-tools__langs',
        siteHeader: 'header.site-header',
        searchButton: '.site-header__search-toggle',
        searchForm: '.search-form',
        searchClose: '.search-close',
        localeSelectorsContent: '.locale-selectors__content',
        headIconWrapper: '.site-header__icons-wrapper',
        headCurrencySelector: '.currency-selected',
        currencyGroup: '.currency-group',
        currencyGroupInputs: '.currency-group .input-currency',
        currencyForm: '.header-selector-currency #currency_form',
        selectorCurrencyDefault: '#currency_form.shopify-currency-form select',
        selectorCurrencyDefaultOptions: '#currency_form.shopify-currency-form select option',
        headerCartBtn: '.site-header__cart',
        headerCartBtnNavMob: '.site-header__cart--mob',
        headerCloseBtnNavMob: '.mobile-nav--close',
        cartPopup: '.cart-popup',
        cartPopupMobContainer: '.cart-popup-mob-container',
        cartPopupMob: '.cart-popup-mobile',
        cartPopupMobClose: '.mobile-cart--close',
        cartPopupMobToggle: '.mobile-nav--toggle',
        mobileNavWrapper: '.mobile-nav-wrapper',
        mobileNavLocalization: '.mobile-nav-localization',
        mobileNavToggle: '.js-mobile-nav-toggle',
        navMobileContainer: '.nav-mobile-container',
        btnMobileNav: '.js-mobile-nav-toggle',
        navMobileContainerGroup: '.nav-mobile-container-group',
        searchFormMob: '.search-form-mob',
        searchFormMobBtn: '.search-form-mob__btn',
        siteHeader__col2: '.site-header__col2',
    };
  
    let mobileNavLangs = document.querySelector(selectors.mobileNavLangs);
    let siteHeader = document.querySelector(selectors.siteHeader);
    let searchButton = document.querySelector(selectors.searchButton);
    let searchForm = document.querySelector(selectors.searchForm);
    let searchClose = document.querySelector(selectors.searchClose);
    let headerCartBtn = document.querySelector(selectors.headerCartBtn);
    let headerCartBtnNavMob = document.querySelector(selectors.headerCartBtnNavMob);
    let headerCloseBtnNavMob = document.querySelector(selectors.headerCloseBtnNavMob);
    let cartPopup = document.querySelector(selectors.cartPopup);
    let cartPopupMobContainer = document.querySelector(selectors.cartPopupMobContainer);
    let cartPopupMob = document.querySelector(selectors.cartPopupMob);
    let cartPopupMobClose = document.querySelector(selectors.cartPopupMobClose);
    let cartPopupMobToggle = document.querySelector(selectors.cartPopupMobToggle);
    let mobileNavWrapper = document.querySelector(selectors.mobileNavWrapper);
    let mobileNavLocalization = document.querySelector(selectors.mobileNavLocalization);
    let mobileNavToggle = document.querySelector(selectors.mobileNavToggle);
    let navMobileContainer = document.querySelector(selectors.navMobileContainer);
    let btnMobileNav = document.querySelector(selectors.btnMobileNav);
    let navMobileContainerGroup = document.querySelector(selectors.navMobileContainerGroup);
    let searchFormMob = document.querySelector(selectors.searchFormMob);
    let searchFormMobBtn = document.querySelector(selectors.searchFormMobBtn);
    let siteHeader__col2 = document.querySelector(selectors.siteHeader__col2);

    let positionFromTop = window.pageYOffset;
  
    function moveSearchForm() {
      if (window.innerWidth > 1024) { 
        siteHeader__col2.appendChild(searchForm)
      } else {
        searchFormMob.appendChild(searchForm)
      }
    }
    addEventListener("load", (event) => {
      moveSearchForm()
    });
    addEventListener("resize", (event) => {
      moveSearchForm()
    });

    searchFormMobBtn.addEventListener("click", function(){
      if (searchFormMob.classList.contains("open")) {
        searchFormMob.classList.remove("open")
      } else {
        searchFormMob.classList.add("open")  
      }
  });

    if (mobileNavLangs) {
        mobileNavLangs.addEventListener("click", function(){
            if (mobileNavLangs.classList.contains("open")) {
                mobileNavLangs.classList.remove("open")
            } else {
                mobileNavLangs.classList.add("open")  
            }
        });
    }

    document.addEventListener("scroll", function(){ 
        positionFromTop = window.pageYOffset;
        if (positionFromTop > 55) {
            siteHeader.classList.add("fixed")
        } else {
            siteHeader.classList.remove("fixed")   
        }
     }, false);


     if (searchButton) {
        searchButton.addEventListener("click", function(){
            if (searchForm.classList.contains("open")) {
                searchForm.classList.remove("open")
                searchButton.classList.remove("open")
            } else {
              searchForm.classList.add("open")  
              searchButton.classList.add("open")  
            }
        });
    }

    if (searchClose) {
        searchClose.addEventListener("click", function(){
            searchForm.classList.remove("open")
            searchButton.classList.remove("open")
            if (window.innerWidth < 1025) { 
              searchFormMob.classList.remove("open")
            }
        });
    }

    function mobileNavContainerChange() {
      if (navMobileContainer.classList.contains("open")) {
        navMobileContainer.classList.remove("open")
      } else {
        navMobileContainer.classList.add("open")  
      }
    }
    
    btnMobileNav.addEventListener("click", function(){

      mobileNavContainerChange()
      
      if (mobileNavWrapper.classList.contains("open")) {
        mobileNavWrapper.classList.remove("open")
      } else {
        mobileNavWrapper.classList.add("open")  
      }

    })

    headerCartBtn.addEventListener("click", function(){

      if (window.innerWidth > 1024) {
        if (cartPopup.classList.contains("open")) {
          cartPopup.classList.remove("open")
          headerCartBtn.classList.remove("open")
        } else {
          cartPopup.classList.add("open")  
          headerCartBtn.classList.add("open")  
        }
      } else {

        mobileNavContainerChange()
        
        if (cartPopupMobContainer.classList.contains("open")) {
          cartPopupMobContainer.classList.remove("open")
        } else {
          cartPopupMobContainer.classList.add("open")  
        }
      }
    })

    headerCloseBtnNavMob.addEventListener("click", function(){
      mobileNavWrapper.classList.remove("open")
      mobileNavContainerChange()
    })
    cartPopupMobClose.addEventListener("click", function(){
      cartPopupMobContainer.classList.remove("open")
      mobileNavContainerChange()
    })
    cartPopupMobToggle.addEventListener("click", function(){
      cartPopupMobContainer.classList.remove("open")
      mobileNavWrapper.classList.add("open")
    })
    headerCartBtnNavMob.addEventListener("click", function(){
      mobileNavWrapper.classList.remove("open")
      cartPopupMobContainer.classList.add("open")
    })




    let disclosureButtons = "";
    let disclosureLists = "";
    let headerSelectorLocalizations = document.querySelector(".header-selector-localization");
    
    if (window.innerWidth > 768) {
      disclosureButtons = siteHeader.querySelectorAll(".disclosure__button")
      disclosureLists = siteHeader.querySelectorAll(".disclosure__list")
    } else {
      disclosureButtons = mobileNavWrapper.querySelectorAll(".disclosure__button")
      disclosureLists = mobileNavWrapper.querySelectorAll(".disclosure__list")
    }

    function closeLocalizations() {
      disclosureButtons.forEach((disclosureButton) => {
        disclosureButton.setAttribute("aria-expanded", "false")
      })
      disclosureLists.forEach((disclosureList) => {
        disclosureList.setAttribute("hidden", "true")
      })
    }

    disclosureButtons.forEach((disclosureButton) => {
      disclosureButton.addEventListener('click', function() {
        let ariaControls_btn = disclosureButton.getAttribute("aria-controls")
        let ariaControls_aria = disclosureButton.getAttribute("aria-expanded")
        closeLocalizations()
        disclosureLists.forEach((disclosureList) => {
          let ariaControls_list = disclosureList.getAttribute("id")
          console.log(ariaControls_btn+ " "+ariaControls_list)
          if (ariaControls_btn == ariaControls_list) {
            if (ariaControls_aria == "false") {
              disclosureList.removeAttribute("hidden")
              disclosureButton.setAttribute("aria-expanded", "true")
            } else {
              disclosureList.setAttribute("hidden", "true")
              disclosureButton.setAttribute("aria-expanded", "false")
            }
          } 
        })
      })
    })


    window.addEventListener('click', function(e){   
      if (!headerSelectorLocalizations.contains(e.target) && !mobileNavLocalization.contains(e.target)) {
        closeLocalizations()
      }
      if (!cartPopup.contains(e.target) && !headerCartBtn.contains(e.target)) {
        cartPopup.classList.remove("open")
      }
      if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("open")
        searchButton.classList.remove("open")
      }
      if (navMobileContainer.contains(e.target) && !navMobileContainerGroup.contains(e.target)) {
        navMobileContainer.classList.remove("open")
        cartPopupMobContainer.classList.remove("open")
        mobileNavWrapper.classList.remove("open")
      }
      
    });

    class LocalizationForm extends HTMLElement {
        constructor() {
          super();
          this.elements = {
            input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
          };
      
          this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
        }
      
        onItemClick(event) {
          event.preventDefault();
          const form = this.querySelector('form');
          this.elements.input.value = event.currentTarget.dataset.value;
          if (form) form.submit();
        }
        
      }
      
      customElements.define('localization-form', LocalizationForm);

      

})(document);
  