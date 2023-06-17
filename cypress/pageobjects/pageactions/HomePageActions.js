/// <reference types='cypress' />
import HomePageElements from "../pageelements/HomePageElements"

class HomePageActions {

    navigateToURL() {
        cy.visit('/')
    }

    validateTitle() {
        return cy.title()
    }


    loginAsACustomer() {
        HomePageElements.customerLoginBtn().click()
    }

    loginAsAManager() {
        HomePageElements.bankManagerLoginBtn().click()
    }
}

export default new HomePageActions()


