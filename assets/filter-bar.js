(function(document) {

    var selectors = {
      body: 'body',
      filterBars: '.filter-bar',
      filterBarActions: '.filter-bar__mob-bar__action',
      plus: '.plus',
      dash: '.dash',
      filterBarOutside: '.filter-bar--outside',
      filterBarInternal: '.filter-bar--internal',
    };
  
    let body = document.querySelector(selectors.body);
    let filterBars = document.querySelectorAll(selectors.filterBars);
    let filterBarActions = document.querySelectorAll(selectors.filterBarActions);
    let plus = document.querySelectorAll(selectors.plus);
    let dash = document.querySelectorAll(selectors.dash);
    let filterBarOutside = document.querySelector(selectors.filterBarOutside);
    let filterBarInternal = document.querySelector(selectors.filterBarInternal);
    let positionFromTop = window.pageYOffset;
    let offsetTopCheck = 200;

    if ( body.classList.contains("template-product")) {
      offsetTopCheck = 50;
    }

    function checkFilterPos(positionFromTop, offsetTopCheck) {
        if (positionFromTop > offsetTopCheck) {
            filterBarOutside.classList.remove("hidden")
            filterBarInternal.classList.add("hidden")
        } else {
            filterBarOutside.classList.add("hidden")
            filterBarInternal.classList.remove("hidden")
        }
    }

    document.addEventListener("DOMContentLoaded", checkFilterPos(positionFromTop, offsetTopCheck))

    document.addEventListener("scroll", function() { 
        
      positionFromTop = window.pageYOffset;
      checkFilterPos(positionFromTop, offsetTopCheck)

    }, false);

    filterBarActions.forEach(filterBarAction => {
      filterBarAction.addEventListener("click", function(){
        filterBars.forEach((filterBar) => {
          if (filterBar.classList.contains("open")) {
            filterBar.classList.remove("open")
            plus.forEach((plusSingle) => {
              plusSingle.classList.remove("hide")
            })
            dash.forEach((dashSingle) => {
              dashSingle.classList.add("hide")
            })
          } else {
            filterBar.classList.add("open")  
            plus.forEach((plusSingle) => {
              plusSingle.classList.add("hide")
            })
            dash.forEach((dashSingle) => {
              dashSingle.classList.remove("hide")
            })
          }
        })
      });
    })


})(document);
  