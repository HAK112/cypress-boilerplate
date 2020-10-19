"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-submodule-imports
var steps_1 = require("cypress-cucumber-preprocessor/steps");
var amazonsearchpage_1 = require("../../pageobjects/amazonsearchpage");
var amazonsearchpage = new amazonsearchpage_1.default();
//cy.fixture('data').as("record")
//
// Before(() => {
//   //cy.visit("https://e2e-boilerplate.github.io/sandbox/");
//   // cy.fixture("data.json").visit("url");
//   //cy.fixture('data.json').visit('URL');
//   // cy.fixture("data.json").visit("URL");
//   cy.fixture('data').then(function (urldata) {
//     this.urldata = urldata;
//   })
//
// });
// before(function () {
//   cy.fixture('data').then(function (data) {
//     this.data = data;
//    // cy.visit(this.data.URL)
//   })
// })
beforeEach(function () {
    // alias the users fixtures
    cy.fixture('data.json').as('users');
});
steps_1.Given("I am on Amazon website", function () {
    amazonsearchpage.visitamazonpage();
});
steps_1.Then("Search for {string}", function (text) {
    amazonsearchpage.searchphone(text);
});
steps_1.Then("Open phone {string}", function (text) {
    amazonsearchpage.clickonphonedetails(text);
});
steps_1.And("Navigate to Phone and add to cart button is displayed", function () {
    amazonsearchpage.navigatetoonephone();
});
steps_1.And("Verify {string} is displayed on detail page", function (price) {
    amazonsearchpage.verifypriceonbothpages(price);
});
steps_1.And("Verify Cart is Empty", function () {
    amazonsearchpage.emptycart();
});
steps_1.And("Click on Add to Cart", function () {
    amazonsearchpage.addtocart();
});
steps_1.And("Verify Items added to Cart", function () {
    amazonsearchpage.verifyitemsaddedtocart();
});
steps_1.And("Select filters {string} from left panel and get results", function (text) {
    amazonsearchpage.Selectbrandfilter(text);
});
