import { CHECKOUTINFO, CHECKOUTOVERVIEW } from '../../fixtures/constants/selectors';
import GeneralFunctions from '../../fixtures/constants/functions';
const generalFunctions = new GeneralFunctions();

class CheckoutOverviewPage {

    getFinishButton() {
        return cy.get(CHECKOUTOVERVIEW.FINISH_BUTTON);
    }

    getCancelButton() {
        return cy.get(CHECKOUTINFO.CANCEL_BUTTON);
    }

    verifyUrlFinalPage() {
        generalFunctions.generalAssert(CHECKOUTOVERVIEW.STRING_FOR_FINAL_URL);
    }
}
export default CheckoutOverviewPage;