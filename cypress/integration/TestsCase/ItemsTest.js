import BasePage from "../Pages/BasePage";
import ProductsPage from "../Pages/ProductsPage";
import ItemPage from "../Pages/ItemPage"
import CartPage from "../Pages/CartPage";

const ItemsTest = () => {
    const productsPage = new ProductsPage();
    const basePage = new BasePage();
    const itemPage = new ItemPage();
    const cartPage = new CartPage();


    describe("items page test", () => {

        it("sort items by price", () => {
            productsPage.sortItemsL_H();
            productsPage.sortItemsH_L();
            productsPage.sortItemsZ_A();
            productsPage.sortItemsA_Z();
        })

        it("add random product to cart and remove", () => {
            productsPage.randomAddItemAndClick();
            itemPage.getRemoveFromCartButton()
                .should('be.visible')
                .click();
            itemPage.getBackButton().click({ force: true });
        })

        it("random add few product to cart and remove from cart", () => {
            productsPage.verifyUrlHomePage();
            let range = 6;
            productsPage.clickRandomAddCart(range);
            basePage.getCartButton()
                .should('be.visible')
                .click();
            cartPage.verifyUrlCartPage();
            cartPage.removeItemsByRandom(range);
            cartPage.getContinueShopButton()
                .should('be.visible')
                .click();
        })

    })
}
export default ItemsTest;