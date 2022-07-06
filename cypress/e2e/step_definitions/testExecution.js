
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import loginUtility from "../../support/actions/loginUtility";
import dashboardPage from "../../support/pages/dashboardPage.json"
import api_utility from "../../utilities/api_utility"

Given('visit application and Login', {timeout: 60 * 1000}, function(){
    cy.visit(this.envURL.url);
    loginUtility.enterUsername(this.loginData.automation9.email);
    loginUtility.enterPassword(this.loginData.automation9.password);
    loginUtility.clickLoginButton();
    cy.wait(10000)

});

Then('user clicks on copy json of {string}', {timeout: 60 * 1000}, function(data){
    api_utility.integrationService(data);
});

Then('user lands on {string} page', {timeout: 60 * 1000}, function(data){
   // cy.get(dashboardPage.dashboard_title).should('have.text',data);
try {
    cy.get(dashboardPage.dashboard_title).invoke('text').then((text) => {
        expect(text.trim()).equal(data);
    });
}catch (e) {
    cy.log(e.toString());
}
});
