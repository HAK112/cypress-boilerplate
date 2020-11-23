import internetrehuhoapppage from "../../pageobjects/internetrehuhoapppage";
// tslint:disable-next-line:no-submodule-imports
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import {admin,nonadmin} from "../../fixtures/users.json"




beforeEach(() => {
    // alias the users fixtures
    // const users = cy.fixture("data.json");
     cy.fixture("users.json").as("users");
    cy.fixture("users").then(function (users) {
        this.user = users;
       // cy.visit(this.data.URL);
    });
});

const internetpage = new internetrehuhoapppage();

Given("I am on Internet rehuhoapppage", () => {
    internetpage.visitsite();
});
Then("I click on {string}", (text) => {
    internetpage.navigatetooptions(text);
});
Then("validate checkbox is checked", () => {
    internetpage.validatecheckbox();
});
Then("click on checkbox", () => {
    internetpage.clickoncheckbox();
});
Then("Right Click and validate the alert", () => {
    internetpage.rightclick();
});
Then("Enter Username {string}", (usersn) => {
    internetpage.enterusername(usersn);
});
Then("Enter password {string}", (text) => {
    internetpage.enterpassword(text);
});
Then("Click on Submit button", () => {
    internetpage.clicksubmit();
});
Then("Open in new tab", () => {
    internetpage.openurlinnewtab();
});
Then("Drag Ablock to Bblock", () => {
    internetpage.dragdropfunction();
});

