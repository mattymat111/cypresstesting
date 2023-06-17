/// <reference types='cypress' />
import OpenAccountPageElements from "../pageelements/OpenAccountPageElements"


class OpenAccountPageActions {

    clickOpenAccountBtn() {
        OpenAccountPageElements.openAccountBtn().click()
    }

    chooseCustomerFromDropDown(custName){
        OpenAccountPageElements.customerNameDropDown().select(custName)
    }

    chooseCurrencyFromDropDown(currency){
        OpenAccountPageElements.currenyDropDown().select(currency)
    }

    clickProcessBtn(){
        OpenAccountPageElements.processBtn().click()
    }

    validateAlert(alertMsg1) {
        cy.on('window:alert', (alertText1) => {
            expect(alertText1).contains(alertMsg1)
        })
    }
}

export default new OpenAccountPageActions()






