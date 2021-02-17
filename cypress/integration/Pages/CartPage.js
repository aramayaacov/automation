import { CARTPAGE } from '../../fixtures/constants/selectors';
import GeneralFunctions from '../../fixtures/constants/functions';
const generalFunctions = new GeneralFunctions();
class CartPage {

    getContinueShopButton() {
        return cy.get(CARTPAGE.CONTINUE_SHOPPING_BUTTON);
    }

    getCheckoutButton() {
        return cy.get(CARTPAGE.CHECKOUT_BUTTON);
    }

    removeItemsByIndex(number) {
        cy.get(CARTPAGE.REMOVE_FROM_CART_BTN).eq(number).click()
    }

    removeItemsByRandom(range) {
        const removeIndex = generalFunctions.randomNumberGenerator(range);
        cy.get(CARTPAGE.REMOVE_FROM_CART_BTN).eq(removeIndex).click()
    }

    verifyUrlCartPage() {
        generalFunctions.generalAssert(CARTPAGE.STRING_FOR_URL_CART);
    }
}
export default CartPage;