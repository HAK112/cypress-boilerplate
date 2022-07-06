
class Input {
    typeTextBySelector(locator, value){
        cy.get(locator).should('be.visible').type(value)
    }
}

export default new Input();
