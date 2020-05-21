import { ElementFinder, browser, protractor } from 'protractor';

const ec = protractor.ExpectedConditions;

export class Utilities {
    public enterTextInElement(selector: ElementFinder, text: any) {
        browser.wait(ec.visibilityOf(selector));
        selector.clear().then(() => {
            selector.sendKeys(text);
        });
    }

    public clickOnElement(selector: ElementFinder): void {
        browser.wait(ec.elementToBeClickable(selector), 5000);
        selector.click();
    }
}

export const Greeter = (name: string) => `Hello ${name}`;
