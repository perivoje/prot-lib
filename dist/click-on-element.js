"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickOnElement = void 0;
var protractor_1 = require("protractor");
function ClickOnElement(selector) {
    var ec = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(ec.elementToBeClickable(selector), 5000);
    selector.click();
}
exports.ClickOnElement = ClickOnElement;
//# sourceMappingURL=click-on-element.js.map