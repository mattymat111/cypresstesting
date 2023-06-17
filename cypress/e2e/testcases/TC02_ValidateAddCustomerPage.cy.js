import AddCustomerPageActions from "../../pageobjects/pageactions/AddCustomerPageActions"
import HomePageActions from "../../pageobjects/pageactions/HomePageActions"

before(() => {
    cy.fixture('customers').then((data) => {
        globalThis.data = data
    })
})

describe('Add Customer Page Login', () => {

    beforeEach(() => {
        HomePageActions.navigateToURL()
        HomePageActions.loginAsAManager()
        AddCustomerPageActions.addCustomerMainPageBtn()
    })

    it('Add Customer Page tests', () => {
        AddCustomerPageActions.addCustomerInfo(data.fName, data.lName, data.pCode)
        AddCustomerPageActions.validateAlert(data.alertText)
    })
})
