import { LOGIN } from '../../fixtures/constants/selectors';
import usersDetails from './usersDetails';
import GeneralFunctions from '../../fixtures/constants/functions';
const generalFunctions = new GeneralFunctions();

class LoginPage {

    standard_login_input() {
        cy.get(LOGIN.USERNAME_INPUT).type(LOGIN.standard_username)
        cy.get(LOGIN.PASSWORD_INPUT).type(LOGIN.PASSWORD)
        cy.get(LOGIN.LOGIN_BUTTON).click()
    }

    fillUserInfoAndLogin() {
        let usernameIndex = Math.round(Math.random() * 4)
        const USER_DETAILS = [...usersDetails.Users]
        cy.get(LOGIN.USERNAME_INPUT).type(USER_DETAILS[usernameIndex].userName)
        cy.get(LOGIN.PASSWORD_INPUT).type(LOGIN.PASSWORD)
        cy.get(LOGIN.LOGIN_BUTTON).click()
    }

    verifyUrlLogin() {
        generalFunctions.generalAssert(LOGIN.STRING_FOR_URL_LOGIN);
    }
}
export default LoginPage;