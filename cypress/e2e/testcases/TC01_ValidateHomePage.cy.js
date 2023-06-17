import HomePageElements from "../../pageobjects/pageelements/HomePageElements";
import HomePageActions from "../../pageobjects/pageactions/HomePageActions";

describe('Bank Manager Login', () => {

    beforeEach(() => {
        HomePageActions.navigateToURL()
    })

    it('Validate Title', () => {
        HomePageActions.validateTitle().should('eq', 'Protractor practice website - Banking App')
    })

    it('Bank Manager Login tests', () => {
        HomePageActions.loginAsAManager()
    })

    it('Customer Login tests', () => {
        HomePageActions.loginAsACustomer()
    })

})
