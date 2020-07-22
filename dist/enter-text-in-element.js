"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enterTextInElement = void 0;
var protractor_1 = require("protractor");
function enterTextInElement(selector, text) {
    var ec = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(ec.visibilityOf(selector));
    selector.clear().then(function () {
        selector.sendKeys(text);
    });
}
exports.enterTextInElement = enterTextInElement;
//# sourceMappingURL=enter-text-in-element.js.map