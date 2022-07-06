class Click {
    clickButton(locator){
        cy.get(locator).click();
    }
}

export default new Click();
