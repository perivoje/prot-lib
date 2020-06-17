import { ElementFinder, browser, protractor } from 'protractor';

export class Utilities {
  public enterTextInElement(selector: ElementFinder, text: any) {
    const ec = protractor.ExpectedConditions;
    browser.wait(ec.visibilityOf(selector));
    selector.clear().then(() => {
      selector.sendKeys(text);
    });
  }

  public clickOnElement(selector: ElementFinder): void {
    const ec = protractor.ExpectedConditions;
    browser.wait(ec.elementToBeClickable(selector), 5000);
    selector.click();
  }

  public greeter(name: string): string {
    const greeter = `Hello ${name}!!!`;
    return greeter;
  }
}
