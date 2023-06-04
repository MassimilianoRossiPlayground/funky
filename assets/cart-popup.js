(function(document) {

    var selectors = {
      cartPopup: '.cart-popup',
      cartPopupMobile: '.cart-popup-mobile',
      cartActionLess: '.cart-action-oneless',
      cartActionMore: '.cart-action-onemore',
      cartActionQuantity: '.cart-action-quantity',
      cartQtyInput: '.cart__qty-input',
      cartItemRemove: '.cart-item-title__remove',
      cartItemPrice: '.cart-item-info__option__price',
      cartItems: '.cart-item-single',
      cartCounts: '[data-cart-count]',
      cartSubtotals: '[data-cart-subtotal]',
    };

    addEventListener("load", (event) => {

      let cartItems = document.querySelectorAll(selectors.cartItems)
      let cartCounts = document.querySelectorAll(selectors.cartCounts)
      let cartSubtotals = document.querySelectorAll(selectors.cartSubtotals)
    
      cartItems.forEach( (cartItem) => {

        let cartActionLess = cartItem.querySelector(selectors.cartActionLess);
        let cartActionMore = cartItem.querySelector(selectors.cartActionMore);
        let cartActionQuantity = cartItem.querySelector(selectors.cartActionQuantity)
        let cartQtyInput = cartItem.querySelector(selectors.cartQtyInput)
        let cartItemRemove = cartItem.querySelector(selectors.cartItemRemove)
        let cartItemPrice = cartItem.querySelector(selectors.cartItemPrice)
        let cartItemLineIndex = cartItem.getAttribute("data-item-line")

        cartActionLess.addEventListener("click", function(){
          let cartQnt = Number.parseInt(cartActionQuantity.innerHTML)
          cartQnt--
          cartActionQuantity.innerHTML = cartQnt.toString()
          cartQtyInput.value = cartQnt
          if (cartQnt == 0) {
            cartItemRemove.click()
          }
          cartCounts.forEach(cartCount => {
            let cartCountNumber = Number.parseInt(cartCount.innerHTML)
            cartCountNumber--
            cartCount.innerHTML = cartCountNumber
          })
          cartSubtotals.forEach(cartSubtotal => {
            let cartSubtotalClean = cartSubtotal.getAttribute("data-subtotal-clean")
            let cartSubtotalCurrency_symbol = cartSubtotal.getAttribute("data-subtotal-currency_symbol")
            let cartSubtotalCurrency_iso_code = cartSubtotal.getAttribute("data-subtotal-currency_iso_code")
            let cartSubtotalNumber = Number.parseInt(cartSubtotalClean)
            let cartItemPriceClean = cartItemPrice.getAttribute("data-price-clean")
            let cartItemPriceNumber = Number.parseInt(cartItemPriceClean)
            cartSubtotalNumber = cartSubtotalNumber - cartItemPriceNumber
            cartSubtotal.setAttribute("data-subtotal-clean", cartSubtotalNumber)
            cartSubtotal.innerHTML = cartSubtotalCurrency_symbol + " " + cartSubtotalNumber.toFixed(2) + " " + cartSubtotalCurrency_iso_code
          })

          updateCartAsync(cartItemLineIndex,cartQnt)

        })
        cartActionMore.addEventListener("click", function(){
          let cartQnt = Number.parseInt(cartActionQuantity.innerHTML)
          cartQnt++
          cartActionQuantity.innerHTML = cartQnt.toString()
          cartQtyInput.value = cartQnt
          cartCounts.forEach(cartCount => {
            let cartCountNumber = Number.parseInt(cartCount.innerHTML)
            cartCountNumber++
            cartCount.innerHTML = cartCountNumber
          })
          cartSubtotals.forEach(cartSubtotal => {
            let cartSubtotalClean = cartSubtotal.getAttribute("data-subtotal-clean")
            let cartSubtotalCurrency_symbol = cartSubtotal.getAttribute("data-subtotal-currency_symbol")
            let cartSubtotalCurrency_iso_code = cartSubtotal.getAttribute("data-subtotal-currency_iso_code")
            let cartSubtotalNumber = Number.parseInt(cartSubtotalClean)
            let cartItemPriceClean = cartItemPrice.getAttribute("data-price-clean")
            let cartItemPriceNumber = Number.parseInt(cartItemPriceClean)
            cartSubtotalNumber = cartSubtotalNumber + cartItemPriceNumber
            cartSubtotal.setAttribute("data-subtotal-clean", cartSubtotalNumber)
            cartSubtotal.innerHTML = cartSubtotalCurrency_symbol + " " + cartSubtotalNumber.toFixed(2) + " " + cartSubtotalCurrency_iso_code
          })

          updateCartAsync(cartItemLineIndex,cartQnt)

        })
      })

    });

    function updateCartAsync(cartItemLineIndex,cartQnt) {
  
      fetch(window.Shopify.routes.root + 'cart/change.js', {
        method: 'POST',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          'line': cartItemLineIndex,
          'quantity': cartQnt
          })
        })
      //  .then(response => response.json())
      //  .then(data => console.log(data))
    
    }

})(document);
  