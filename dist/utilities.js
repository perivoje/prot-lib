"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = exports.Utilities = void 0;
var protractor_1 = require("protractor");
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities.prototype.enterTextInElement = function (selector, text) {
        var ec = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(ec.visibilityOf(selector));
        selector.clear().then(function () {
            selector.sendKeys(text);
        });
    };
    Utilities.prototype.clickOnElement = function (selector) {
        var ec = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(ec.elementToBeClickable(selector), 5000);
        selector.click();
    };
    return Utilities;
}());
exports.Utilities = Utilities;
exports.Greeter = function (name) { return "Hello " + name; };
//# sourceMappingURL=utilities.js.map