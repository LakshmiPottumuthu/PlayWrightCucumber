import { Page } from "@playwright/test";

export default class PlaywrightWrapper {

    constructor(private page: Page) { }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async navigateBack() {
        await this.page.goBack( {
            waitUntil: "domcontentloaded"
        });
        
    }
    async navigateForward() {
        await this.page.goBack( {
            waitUntil: "domcontentloaded"
        });
        
    }

    async waitAndSendKeys(locator: string,text: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.type(text);
    }

    async shouldSeeText(locator: string,text: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.type(text);
    }

}