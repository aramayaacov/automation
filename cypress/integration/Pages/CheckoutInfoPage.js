import GeneralFunctions from '../../fixtures/constants/functions';
import { CHECKOUTINFO } from '../../fixtures/constants/selectors';
const generalFunctions = new GeneralFunctions();

class CheckoutInfoPage {

    getCancelButton() {
        return cy.get(CHECKOUTINFO.CANCEL_BUTTON);
    }

    getContinueButton() {
        return cy.get(CHECKOUTINFO.CONTINUE_BUTTON);
    }

    input_firstname(firstname) {
        cy.get(CHECKOUTINFO.FIRSTNAME_INPUT).type(firstname);
    }

    input_lastname(lastname) {
        cy.get(CHECKOUTINFO.LASTNAME_INPUT).type(lastname)
    }

    input_postalcode(postalcode) {
        cy.get(CHECKOUTINFO.POSTALCODE_INPUT).type(postalcode)
    }

    inputAllInfo(firstname, lastname, postalcode) {
        this.input_firstname(firstname);
        this.input_lastname(lastname);
        this.input_postalcode(postalcode);
    }

    inputAllAndContinue(firstname, lastname, postalcode) {
        this.inputAllInfo(firstname, lastname, postalcode);
        this.getContinueButton().click();
    }

    verifyUrlInfoPage() {
        generalFunctions.generalAssert(CHECKOUTINFO.STRING_FOR_URL_INFO);
    }

}
export default CheckoutInfoPage;