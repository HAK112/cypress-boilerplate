"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Basepage = /** @class */ (function () {
    function Basepage() {
    }
    Basepage.pause = function (milliseconds) {
        cy.wait(milliseconds);
    };
    return Basepage;
}());
exports.default = Basepage;
