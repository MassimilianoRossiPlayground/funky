(function(document) {

    let selectors = {
        modalClose: '.close-modal',
        modalPdpContainer: '.modal-pdp-container',
        buttonsSize: '.buttons-size__btn',
        dataTables: '.data-table',
        tablesSizes: '.table-sizes',
    };
  

    let modalClose = document.querySelector(selectors.modalClose)
    let modalPdpContainer = document.querySelector(selectors.modalPdpContainer)
    let buttonsSize = document.querySelectorAll(selectors.buttonsSize)
    let dataTables = document.querySelectorAll(selectors.dataTables)
    let tablesSizes = document.querySelectorAll(selectors.tablesSizes)

    modalClose.addEventListener("click", function(){
        modalPdpContainer.classList.remove("open")
    })

    buttonsSize.forEach( buttonSize => {
        buttonSize.addEventListener("click", function(){
            buttonsSize.forEach( buttonSizeClean => {
                buttonSizeClean.classList.remove("selected")
            })
            buttonSize.classList.add("selected")
            let dataTable__btn = buttonSize.getAttribute("data-table")
            dataTables.forEach( dataTable => {
                let dataTable__table = dataTable.getAttribute("data-table")
                if (dataTable__table == dataTable__btn ) {
                    dataTable.classList.remove("hide")
                } else {
                    dataTable.classList.add("hide")
                }
            })

        })
    })

    tablesSizes.forEach( tableSizes => {

        let tableTrs = tableSizes.querySelectorAll("tr");
        tableTrs.forEach(function(tableTr){
            tableTr.addEventListener('mouseenter', (event) => {
                tableTr.classList.add("selected")
            });
            tableTr.addEventListener('mouseleave', (event) => {
                tableTr.classList.remove("selected")
            });
        })

    })

    


})(document);
  