import { ITEMPAGE } from '../../fixtures/constants/selectors';

class ItemPage {
    getAddCartItemButton() {
        return cy.get(ITEMPAGE.ADD_TO_CART_BUTTON)
    }

    getAddToCartItemButton() {
        return cy.get(ITEMPAGE.ADD_TO_CART_BUTTON);
    }

    getBackButton() {
        return cy.get(ITEMPAGE.BACK_BUTTON);
    }

    getRemoveFromCartButton() {
        return cy.get(ITEMPAGE.REMOVE_FROM_CART_BUTTON);
    }
}
export default ItemPage;