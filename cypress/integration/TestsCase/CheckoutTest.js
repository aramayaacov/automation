import CheckoutOverviewPage from "../Pages/CheckoutOverviewPage";
import CheckoutInfoPage from "../Pages/CheckoutInfoPage";
import CartPage from "../Pages/CartPage";
import BasePage from "../Pages/BasePage";
import ProductsPage from "../Pages/ProductsPage";

const CheckoutTest = () => {
    const productsPage = new ProductsPage();
    const basePage = new BasePage();
    const cartPage = new CartPage();
    const checkoutInfoPage = new CheckoutInfoPage();
    const checkoutOverviewPage = new CheckoutOverviewPage();
    const FIRSTNAME = 'yaacov';
    const LASTNAME = 'arama';
    const POSTALCODE = '34532';

    describe("checkout pages test", () => {

        it("continue to checkout and click cancel btn", () => {
            productsPage.verifyUrlHomePage();
            basePage.getCartButton().click();
            cartPage.verifyUrlCartPage();
            cartPage.getCheckoutButton().click();
            checkoutInfoPage.verifyUrlInfoPage();
            checkoutInfoPage.getCancelButton().click();
        })

        it("fill info and cancel", () => {
            cartPage.getCheckoutButton().click();
            checkoutInfoPage.verifyUrlInfoPage();
            checkoutInfoPage.inputAllAndContinue(FIRSTNAME, LASTNAME, POSTALCODE);
            checkoutOverviewPage.getCancelButton().click();
        })

        it("fill info and finish order", () => {
            productsPage.verifyUrlHomePage();
            basePage.getCartButton().click();
            cartPage.verifyUrlCartPage();
            cartPage.getCheckoutButton().click();
            checkoutInfoPage.inputAllAndContinue(FIRSTNAME, LASTNAME, POSTALCODE);
            checkoutOverviewPage.getFinishButton().click();
            checkoutOverviewPage.verifyUrlFinalPage();
        })
    })
}
export default CheckoutTest;