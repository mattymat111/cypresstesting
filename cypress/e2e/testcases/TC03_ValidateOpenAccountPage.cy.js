import HomePageActions from "../../pageobjects/pageactions/HomePageActions"
import OpenAccountPageActions from "../../pageobjects/pageactions/OpenAccountPageActions"
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'


before(() => {
    cy.fixture('customers').then((data1) => {
        globalThis.data1 = data1
    })
})

describe('Validate Open Account Page', () => {

    beforeEach(() => {
        HomePageActions.navigateToURL()

    })

    it('Open Account Page tests', () => {
        HomePageActions.loginAsAManager()
        AddCustomerPageActions.addCustomerMainPageBtn()
        AddCustomerPageActions.addCustomerInfo(data1.fName, data1.lName, data1.pCode)
        AddCustomerPageActions.validateAlert(data1.alertText)

        OpenAccountPageActions.clickOpenAccountBtn()
        OpenAccountPageActions.chooseCustomerFromDropDown(data1.fName+' '+data1.lName)
        OpenAccountPageActions.chooseCurrencyFromDropDown(data1.currency)
        OpenAccountPageActions.clickProcessBtn()
        OpenAccountPageActions.validateAlert(data1.accountCreatedText)
    })
})
