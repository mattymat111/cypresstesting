/// <reference types='cypress' />

import AddCustomerPageElements from "../pageelements/AddCustomerPageElements"

class AddCustomerPageActions {

    addCustomerMainPageBtn() {
        AddCustomerPageElements.addCustomerMainPageBtn().click()

        // element.addCustomerMainPageBtn().click()
    }

    addCustomerInfo(firstName, lastName, postCode) {
        AddCustomerPageElements.addFirstNameInput().type(firstName)
        AddCustomerPageElements.addLastNameInput().type(lastName)
        AddCustomerPageElements.addPostCodeInput().type(postCode)
        AddCustomerPageElements.addCustomerBtn().click()
    }

    validateAlert(alertMsg) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).contains(alertMsg)
        })
    }
}
export default new AddCustomerPageActions()






