import BasePage from "../Pages/BasePage";
import LoginPage from "../Pages/LoginPage";

const LogoutTest = () => {
    const basePage = new BasePage();
    const loginPage = new LoginPage();
    describe("logout Test", () => {

        it("logout after all test cases", () => {
            basePage.getMenuButton().click();
            basePage.getLogoutButton()
                .should('be.visible')
                .click();
        })

        it("verify logout", () => {
            loginPage.verifyUrlLogin();
        })
    })
}
export default LogoutTest;