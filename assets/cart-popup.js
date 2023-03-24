(function(document) {

    var selectors = {
      cartPopup: '.cart-popup',
      cartPopupMobile: '.cart-popup-mobile',
      cartActionLess: '.cart-action-oneless',
      cartActionMore: '.cart-action-onemore',
      cartActionQuantity: '.cart-action-quantity',
      cartQtyInput: '.cart__qty-input',
      cartItemRemove: '.cart-item-title__remove',
      cartItems: '.cart-item-single',
    };

    let cartItems = document.querySelectorAll(selectors.cartItems)
    
    cartItems.forEach( (cartItem) => {

      let cartActionLess = cartItem.querySelector(selectors.cartActionLess);
      let cartActionMore = cartItem.querySelector(selectors.cartActionMore);
      let cartActionQuantity = cartItem.querySelector(selectors.cartActionQuantity)
      let cartQtyInput = cartItem.querySelector(selectors.cartQtyInput)
      let cartItemRemove = cartItem.querySelector(selectors.cartItemRemove)

      cartActionLess.addEventListener("click", function(){
        let cartQnt = Number.parseInt(cartActionQuantity.innerHTML)
        cartQnt--
        cartActionQuantity.innerHTML = cartQnt.toString()
        cartQtyInput.value = cartQnt
        if (cartQnt == 0) {
          cartItemRemove.click()
        }
      })
      cartActionMore.addEventListener("click", function(){
        let cartQnt = Number.parseInt(cartActionQuantity.innerHTML)
        cartQnt++
        cartActionQuantity.innerHTML = cartQnt.toString()
        cartQtyInput.value = cartQnt
      })
    })

})(document);
  