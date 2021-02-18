import { BASEPAGE } from "../../fixtures/constants/selectors";
import BasePage from "../Pages/BasePage";
import LoginPage from "../Pages/LoginPage";
import ProductsPage from "../Pages/ProductsPage"

const AboutTest = () => {
    const basePage = new BasePage();
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    describe("About Test", () => {

        it("check login Page and get to products Page", () => {
            loginPage.verifyUrlLogin();
            loginPage.fillUserInfoAndLogin();
            productsPage.verifyUrlHomePage();
        })

        it("get to about Page", () => {
            basePage.getMenuButton().click();
            basePage.getAboutButton().click();
        })

        it("verify title of About Page", () => {
            basePage.getTitle().should('eq', BASEPAGE.STRING_FOR_TITLE_ABOUT);
        })
    })
}
export default AboutTest;