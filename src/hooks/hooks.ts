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

const fs = require("fs-extra");

BeforeAll(async function(){
    getEnv();
    browser = await invokeBrowser();
    
});

Before(async function({ pickle }) {
    const scenarioName = pickle.name 
    context = await browser.newContext();
    page = await context.newPage();
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName))
})

After(async function ({pickle,result}){

    let videoPath: string;
    let img: Buffer;
    //screenshot
    console.log(result?.status);
    if (result?.status == Status.FAILED) {
        img = await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        await this.attach(img,"img/png");
        videoPath = await fixture.page.video().path();
        
    }
  
    await page.close();
    await context.close();
    if (result?.status == Status.PASSED) {
        await this.attach(
            img, "image/png"
        );
        await this.attach(
            fs.readFileSync(videoPath),
            'video/webm'
        );
    }
})

AfterAll(async function (){

    await browser.close();
  
    
})