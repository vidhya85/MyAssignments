import {test,expect} from "@playwright/test"

test("Salesforce login", async ({page}) => {
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
await page.locator('#password').fill("TestLeaf@2025")
await page.locator('[class="button r4 wide primary"]').first().click()

await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home')
let pageurl=page.url()
console.log(pageurl)
})