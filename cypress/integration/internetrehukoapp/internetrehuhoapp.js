"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var internetrehuhoapppage_1 = require("../../pageobjects/internetrehuhoapppage");
// tslint:disable-next-line:no-submodule-imports
var steps_1 = require("cypress-cucumber-preprocessor/steps");
beforeEach(function () {
    // alias the users fixtures
    // const users = cy.fixture("data.json");
    cy.fixture("users.json").as("users");
    cy.fixture("users").then(function (users) {
        this.user = users;
        // cy.visit(this.data.URL);
    });
});
var internetpage = new internetrehuhoapppage_1.default();
steps_1.Given("I am on Internet rehuhoapppage", function () {
    internetpage.visitsite();
});
steps_1.Then("I click on {string}", function (text) {
    internetpage.navigatetooptions(text);
});
steps_1.Then("validate checkbox is checked", function () {
    internetpage.validatecheckbox();
});
steps_1.Then("click on checkbox", function () {
    internetpage.clickoncheckbox();
});
steps_1.Then("Right Click and validate the alert", function () {
    internetpage.rightclick();
});
steps_1.Then("Enter Username {string}", function (usersn) {
    internetpage.enterusername(usersn);
});
steps_1.Then("Enter password {string}", function (text) {
    internetpage.enterpassword(text);
});
steps_1.Then("Click on Submit button", function () {
    internetpage.clicksubmit();
});
steps_1.Then("Open in new tab", function () {
    internetpage.openurlinnewtab();
});
steps_1.Then("Drag Ablock to Bblock", function () {
    internetpage.dragdropfunction();
});
