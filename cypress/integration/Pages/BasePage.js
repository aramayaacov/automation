import { BASEPAGE } from '../../fixtures/constants/selectors';

class BasePage {

    getMenuButton() {
        return cy.get(BASEPAGE.MENU_BUTTON);
    }

    getInventoryButton() {
        return cy.get(BASEPAGE.INVENTORY_BUTTON);
    }

    getAboutButton() {
        return cy.get(BASEPAGE.ABOUT_BUTTON);
    }

    getLogoutButton() {
        return cy.get(BASEPAGE.LOGOUT_BUTTON);
    }

    getResetButton() {
        return cy.get(BASEPAGE.RESET_DATA_BUTTON);
    }

    getCartButton() {
        return cy.get(BASEPAGE.CART_BUTTON);
    }

    getTitle() {
        return cy.title();
    }

}
export default BasePage;