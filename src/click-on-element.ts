import { ElementFinder, browser, protractor } from "protractor";

export function ClickOnElement(selector: ElementFinder) {
    const ec = protractor.ExpectedConditions;
    browser.wait(ec.elementToBeClickable(selector), 5000);
    selector.click();
}