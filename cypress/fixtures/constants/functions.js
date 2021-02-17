class GeneralFunctions {
    randomNumberGenerator = (range) => {
        return Math.round(Math.random() * (range))
    }

    generalAssert = (string) => {
        cy.url().should('include', string)
    }
}
export default GeneralFunctions;