// <reference types='cypress' />

const or = require('../../locators.json')

class OpenAccountPageElements {

    openAccountBtn(){
        return cy.get(or.openAccountPage.openAccountBtn)
    }
    
    customerNameDropDown(){
        return cy.get(or.openAccountPage.customerNameDropDown)
    }

    currenyDropDown(){
        return cy.get(or.openAccountPage.currencyDropDown)
    }
   
    processBtn(){
        return cy.get(or.openAccountPage.processBtn)
    }
}
export default new OpenAccountPageElements()


