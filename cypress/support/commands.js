class PageObject {
        //methods
        visit_Website = () => {
                cy.visit('https://www.saucedemo.com/');
        }
}
export default PageObject;