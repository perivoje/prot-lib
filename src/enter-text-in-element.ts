import { ElementFinder, browser, protractor } from "protractor";

export function enterTextInElement(selector: ElementFinder, text: any) {
    const ec = protractor.ExpectedConditions;
    browser.wait(ec.visibilityOf(selector));
    selector.clear().then(() => {
        selector.sendKeys(text);
    });
}