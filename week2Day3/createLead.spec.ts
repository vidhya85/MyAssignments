import { test,expect } from "@playwright/test";
test("Create a Lead",async({page}) => {
await page.goto(" http://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill("demoCSR2")
await page.locator('#password').fill("crmsfa")
await page.locator('.decorativeSubmit').click()
await page.locator(`text='CRM/SFA'`).click()
await page.locator(`text='Leads'`).click()
await page.locator(`text=\'Create Lead\'`).first().click()
await page.locator('#createLeadForm_companyName').fill("Pillir")
await page.locator('#createLeadForm_firstName').fill("Srividhya")
await page.locator('#createLeadForm_lastName').fill("Kalyan")
await page.locator('#createLeadForm_personalTitle').fill("Mrs")
await page.locator('#createLeadForm_generalProfTitle').fill("Tester")
await page.locator('#createLeadForm_annualRevenue').fill("$1000")
await page.locator('#createLeadForm_departmentName').fill("IT")
await page.locator('#createLeadForm_primaryPhoneNumber').fill("211 354 678")
await page.locator('input[value="Create Lead"]').click()


})




