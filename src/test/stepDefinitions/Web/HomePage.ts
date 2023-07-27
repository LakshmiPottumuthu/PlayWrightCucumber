import { Given, When, Then,setDefaultTimeout } from '@cucumber/cucumber'
import { fixture } from "../../../hooks/pageFixture";
import { expect, Page,BrowserContext } from "@playwright/test";
import Assert from "../../../wrapper/assert";

let context : BrowserContext

setDefaultTimeout(60 * 1000 * 2)

Given('I am on page {string}', async function (url) {
   await fixture.page.goto(process.env.BASEURL+url);
   fixture.logger.info("Navigated to the application")
  });



  When('I navigate to page {string}', async function (jobsUrl) {
    await fixture.page.goto(process.env.BASEURL+jobsUrl)
    fixture.logger.info("Navigated to the jobs page")
  });

       
  Then('I should see text {string}', async function (textMessage) {
    expect(await fixture.page.locator("(//*[contains(text(),'" + textMessage + "')])[1]").textContent()).toEqual(textMessage)
          
  });



  Then('I click on recent searches link', async function () {
    await fixture.page.locator("//*[@class='recent-searches-desktop-btn']").click()

  });




  Then('I click on {string}', async function (linkText) {

    await fixture.page.locator("(//*[contains(text(),\"" + linkText + "\")])[1]").click()

  });



  Then('I should be able to see in browser URL {string}', async function (url) {
    await expect(fixture.page).toHaveURL(process.env.BASEURL+url)
    
  });


  
    Given('I fill in search title field with {string}', async function (title) {
      await fixture.page.locator("input[name='q']").type(title);
    
    });
  
  
    Given('I fill in search location with {string}', async function (location) {
      await fixture.page.locator("input[name='loc']").type(location);
     
    });
  
  
    Given('I select {string} from search distance', async function (distance) {
      await fixture.page.locator("select[name='r']").selectOption(distance)
      
    });

  
    Given('I click on find jobs button', async function () {
      await fixture.page.locator("#home-search-submit").click()
     
    });
  
    Then('I should see text H one tag {string}', async function (textMessage) {
      expect(await fixture.page.locator("//h1[text()='"+textMessage+"']").textContent()).toEqual(textMessage)
     
    });
  
    Then('the title field should contain {string}', async function (title) {
      expect(await fixture.page.locator("#q").getAttribute("data-orig")).toEqual(title)
  
    });
  
    Then('the location field should contain {string}', async function (location) {
      expect(await fixture.page.locator("#search_loc").getAttribute("data-orig")).toEqual(location)
     
    });
  
    Then('the distance field should contain {string}', async function (distance) {
      expect(await fixture.page.locator("#search-results-distance").getAttribute("data-orig")).toEqual(distance)
     
    });

  Then('I move backward one page', async function () {
     await fixture.page.goBack();
  })


  Then('I should see linkText {string} under Jobs by Industry tab', async function (jobsByIndustry) {
    expect(await fixture.page.locator("//div[@id='home-jobs-by-industry']/ul/li").filter({hasText: jobsByIndustry}));
   
  })


  Then('I should see linkText {string} under Jobs by State tab', async function (jobsByState) {
    expect(await fixture.page.locator("//div[@id='home-jobs-by-state']/ul/li").filter({hasText: jobsByState}));
  
  })



  Then('I should see linkText {string} under Jobs by City tab', async function (jobsByCity) {
    expect(await fixture.page.locator("//div[@id='home-jobs-by-city']/ul/li").filter({hasText: jobsByCity}));
  
  })


  Then('I should see linkText {string} under Popular Jobs tab', async function (popularJobs) {
    expect(await fixture.page.locator("//div[@id='home-popular-jobs']/ul/li").filter({hasText: popularJobs}));
 
  })

Then('I should see text H two tag {string}', async function (textMessage) {
  expect(await fixture.page.locator("//h2[text()='"+textMessage+"']").textContent()).toEqual(textMessage)
 
});

Then('I confirm browser popup',async function () {
  await fixture.page.on('dialog', dialog => dialog.accept());
 
});

Then('I click on clear recent searches link', async function () {
 
  await fixture.page.locator("(//button[text()='Clear recent searches'])[1]").click()
 
});

When('I select the option {string} from {string} field', async function (optionValue,fieldName) {
 
  switch (fieldName) {
    case "Partner Type":
      await fixture.page.locator("select[name='r']").selectOption(optionValue)
        break;
    case "State":
      await fixture.page.locator("select[name='r']").selectOption(optionValue)
        break;
  }
 
});

Given('I login as a client',async function () {
  await fixture.page.goto(process.env.BASEURL+"/hiring/login");
  await fixture.page.locator("input#email").type(process.env.ClientEmailAddress);
  await fixture.page.locator("input[name='pass']").type(process.env.ClientPassword);
  await fixture.page.locator("button#client-login-submit-btn").click();
 
});

When('I switch tab', async function () {

  const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    await fixture.page.click("#home")
])
await newWindow.waitForLoadState();
});

Then('I should be able to see in browser URL {string} or I should see {string}', (s: string, s2: string) => {
  // Write code here that turns the phrase above into concrete actions
})


      




