import PageObject from '../../support/commands';
import LoginPage from '../Pages/LoginPage';
import ProductsPage from '../Pages/ProductsPage'

const LoginTest = () => {
    const pageObject = new PageObject();
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage
    describe("random login test", () => {

        it("login into WebSite", () => {
            pageObject.visit_Website();
            loginPage.fillUserInfoAndLogin();
        })

        it("verify login", () => {
            productsPage.verifyUrlHomePage();
        })
    });
}
export default LoginTest;