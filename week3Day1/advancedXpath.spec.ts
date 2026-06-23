import test from "@playwright/test"
test("Learn Advanced Xpath", async({page})=>{
await page.goto("https://login.salesforce.com/")
await page.locator("//div[@id='username_container']/input[1]").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//label[text()='Password']/following-sibling::input [1]").fill("TestLeaf@2025")
await page.locator("//div[contains(@class,'remember')]/preceding-sibling::input[@id='Login']").click()

})