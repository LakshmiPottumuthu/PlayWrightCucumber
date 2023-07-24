import { BeforeAll,AfterAll, Before, After,BeforeStep,AfterStep,Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page} from '@playwright/test'
import { invokeBrowser } from "../browsers/browserManager";
import { fixture } from "./pageFixture";
import { Logger, createLogger } from "winston";
import { options } from "../helper/util/logger";
import { getEnv } from "../helper/env/env";

let browser : Browser;
let page: Page;
let context : BrowserContext
let logger : Logger



BeforeAll(async function(){
    getEnv();
    browser = await invokeBrowser();
    
});

Before(async function({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext();
    page = await context.newPage();
    fixture.page = page;
    //fixture.logger = createLogger(options(scenarioName))
})

After(async function ({pickle,result}){

    //screenshot
    console.log(result?.status);
    if (result?.status == Status.FAILED) {
        const img = await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        await this.attach(img,"img/png");
    }
  
    await page.close();
    await context.close();
    
})

AfterAll(async function (){

    await browser.close();
    //await fixture.logger.close();
  
    
})