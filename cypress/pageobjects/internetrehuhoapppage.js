"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dragA = '#column-a';
var dragB = '#column-b';
// tslint:disable-next-line:class-name
var internetrehuhoapppage = /** @class */ (function () {
    function internetrehuhoapppage() {
    }
    internetrehuhoapppage.prototype.visitsite = function () {
        cy.visit("https://the-internet.herokuapp.com/");
        // cy.title().should("contain",'herokuapp.com');
    };
    // tslint:disable-next-line:no-empty
    internetrehuhoapppage.prototype.navigatetooptions = function (text) {
        cy.get('a').contains(text).click();
    };
    internetrehuhoapppage.prototype.validatecheckbox = function () {
        cy.get('form[id="checkboxes"]').children().last().should('be.checked');
    };
    internetrehuhoapppage.prototype.clickoncheckbox = function () {
        cy.get('form[id="checkboxes"]').children().first().click();
        cy.get('form[id="checkboxes"]').children().first().should('be.checked');
    };
    internetrehuhoapppage.prototype.rightclick = function () {
        cy.get('#hot-spot').rightclick();
        cy.on('window:alert', function (txt) {
            expect(txt).to.contains("You selected a context menu");
        });
    };
    internetrehuhoapppage.prototype.enterusername = function (usersn) {
        cy.fixture("users").then(function (users) {
            this.user = users;
            // cy.visit(this.data.URL);
            cy.get('input[name="username"]').type(this.user[usersn].username);
        });
        // cy.get('input[name="username"]').type(usersn);
    };
    internetrehuhoapppage.prototype.enterpassword = function (usersn) {
        cy.fixture("users").then(function (users) {
            this.user = users;
            // cy.visit(this.data.URL);
            cy.get('input[name="password"]').type(this.user[usersn].password);
        });
        // cy.get('input[name="password"]').type(nonadmin.password);
    };
    internetrehuhoapppage.prototype.clicksubmit = function () {
        cy.get('.radius').click();
    };
    internetrehuhoapppage.prototype.openurlinnewtab = function () {
        cy.get('a[href="/windows/new"]')
            .invoke('removeAttr', 'target').click();
        // cy.get('a[href="/windows/new"]').click();
        // cy.get('a[href="/windows/new"]').should('have.attr', 'target', '_blank')
        // cy.wait(1000);
        cy.get("h3").contains("New Window").should("be.visible");
        cy.go('back');
    };
    internetrehuhoapppage.prototype.dragdropfunction = function () {
        var dataTransfer = new DataTransfer;
        cy.get(dragA)
            .trigger('dragstart', { dataTransfer: dataTransfer });
        cy.get(dragB)
            .trigger('drop', { dataTransfer: dataTransfer });
        cy.get("div[id=\"column-a\"]").children().should('contain', 'B');
    };
    return internetrehuhoapppage;
}());
exports.default = internetrehuhoapppage;
