import test from "@playwright/test"
test ("Learn Playwright Locators", async({page})=>{
await page.goto(" https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole("link",{name:"Forgot login info?"}).click()
await page.getByAltText('ParaBank').click()
await page.getByRole('link', { name: 'Locations' }).first().click()
await page.getByRole("button").nth(1).click()
await page.getByRole("textbox").fill("Chennai")



})