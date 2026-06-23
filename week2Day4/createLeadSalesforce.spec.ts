import test from "@playwright/test";

test("Create Lead in Salesforce", async({page})=> {
    test.setTimeout(120000);
    await page.goto("https://login.salesforce.com/")
    await page.locator('#username').fill("vidhya85.6f6bf86abff9@agentforce.com")
    await page.locator('#password').fill("srikar8581")
    await page.locator('#Login').click()
    await page.pause();
    await page.locator('.slds-icon-waffle').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//p[@class="al-app-tile-description"]').nth(9).click();
    await page.locator('[title="Leads"]').click()
    await page.locator('[name="New"]').click()
    await page.locator('//button [@aria-label="Salutation"]').click()



})