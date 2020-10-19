// tslint:disable-next-line:no-submodule-imports
import {Given, Before, Then, And} from "cypress-cucumber-preprocessor/steps";
import Amazonsearchpage from "../../pageobjects/amazonsearchpage";

 let amazonsearchpage = new Amazonsearchpage()
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
beforeEach(() => {
    // alias the users fixtures
    cy.fixture('data.json').as('users')
})

Given("I am on Amazon website", () => {
  amazonsearchpage.visitamazonpage()
});

Then("Search for {string}", (text) => {
  amazonsearchpage.searchphone(text)
});

Then("Open phone {string}", (text) => {
  amazonsearchpage.clickonphonedetails(text)
});

And("Navigate to Phone and add to cart button is displayed", () => {
    amazonsearchpage.navigatetoonephone();
})

And("Verify {string} is displayed on detail page", (price) => {
    amazonsearchpage.verifypriceonbothpages(price);
});

And("Verify Cart is Empty", () => {
    amazonsearchpage.emptycart();
});
And("Click on Add to Cart", () => {
    amazonsearchpage.addtocart();
});

And("Verify Items added to Cart", () => {
    amazonsearchpage.verifyitemsaddedtocart();
});
And("Select filters {string} from left panel and get results", (text) => {
    amazonsearchpage.Selectbrandfilter(text);
});





