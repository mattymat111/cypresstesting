// <reference types='cypress' />

const or = require('../../locators.json')

class HomePageElements {

    customerLoginBtn() {
        return cy.get(or.homepage.customerLoginBtn)
    }

    bankManagerLoginBtn() {
        return cy.get(or.homepage.managerLoginBtn)
    }
}

export default new HomePageElements()
