import internetrehuhoapppage from "../../pageobjects/internetrehuhoapppage";
// tslint:disable-next-line:no-submodule-imports
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";

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