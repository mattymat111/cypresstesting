// <reference types='cypress' />

const or = require('../../locators.json')

class AddCustomerPageElements {

    addCustomerMainPageBtn() {
        return cy.get(or.addCustomerMainPageBtn)
    }

    addCustomerBtn() {
        return cy.get(or.addCustomerPage.addCustomerBtn)
    }

    addFirstNameInput() {
        return cy.get(or.addCustomerPage.firstName)
    }

    addLastNameInput() {
        return cy.get(or.addCustomerPage.lastName)
    }

    addPostCodeInput() {
        return cy.get(or.addCustomerPage.postCode)
    }
}
export default new AddCustomerPageElements()


