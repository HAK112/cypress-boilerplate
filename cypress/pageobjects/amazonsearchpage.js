"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var searchtextfield = "#twotabsearchtextbox";
var addtocarticon = 'input[value="Add to Cart"]';
var oneplusphoneslink = 'a[href*="OnePlus-"]';
var priceonlist = ".a-offscreen";
var priceindetail = "#priceblock_ourprice";
var carticon = 'a[class="nav-a nav-a-2"]';
var brandphone = 'li[aria-label="HTC"]';
var Amazonsearchpage = /** @class */ (function () {
    function Amazonsearchpage() {
    }
    // Navigate to Amazon page
    Amazonsearchpage.prototype.visitamazonpage = function () {
        cy.fixture("data").then(function (data) {
            this.data = data;
            cy.visit(this.data.URL);
        });
        cy.title().should("contain", "Amazon.com");
    };
    // Search for One Plus Phones
    Amazonsearchpage.prototype.searchphone = function (text) {
        cy.get(searchtextfield).type(text + "{enter}", { force: true });
    };
    // Verify price on search List
    Amazonsearchpage.prototype.priceonsearchlistpage = function (price) {
        cy.get(priceonlist).contains(price).should("be.visible");
    };
    // Navigate to Phone from search results
    Amazonsearchpage.prototype.clickonphonedetails = function (text) {
        // cy.get('.a-offscreen').contains('598').should('be.visible')
        cy.get('h2').children().children().contains(text).click({ force: true });
        cy.wait(5000);
        cy.get(addtocarticon).should("be.visible");
    };
    Amazonsearchpage.prototype.navigatetoonephone = function () {
        cy.get(oneplusphoneslink)
            .contains("OnePlus-Interstellar-Unlocked-Android-Smartphone")
            .click();
        cy.get(addtocarticon).should("be.visible");
    };
    // verify the price
    Amazonsearchpage.prototype.verifypriceonbothpages = function (price) {
        // var pricetag = cy.get(oneplusphoneslink).contains(phone).next().next('.a-offscreen');
        // cy.log("Cost of Phone"+pricetag);
        cy.get(priceindetail).contains(price).should("be.visible");
        // cy.get(priceonlist).and(priceindetail).should('eq' , price)
    };
    // Verify your cart is empty
    Amazonsearchpage.prototype.emptycart = function () {
        cy.get(carticon).click({ force: true });
        cy.wait(2000);
        cy.get("h2").contains("Your Amazon Cart is empty").should("be.visible");
    };
    // Click on Add to Cart
    Amazonsearchpage.prototype.addtocart = function () {
        cy.get(addtocarticon).click();
        cy.wait(2000);
    };
    // Verify Items added to Cart
    Amazonsearchpage.prototype.verifyitemsaddedtocart = function () {
        cy.get("h1").contains("Added to Cart").should("be.visible");
    };
    // Select Branded phones and filter options from left panel
    Amazonsearchpage.prototype.Selectbrandfilter = function (text) {
        var filtervalue = text.split(";");
        for (var i = 0; i < filtervalue.length; i++) {
            cy.get("li[aria-label='" + filtervalue[i] + "']").children().children().children().children().children('input[type="checkbox"]').click({ force: true });
        }
    };
    return Amazonsearchpage;
}());
exports.default = Amazonsearchpage;
