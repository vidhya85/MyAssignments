import {chromium,test} from "@playwright/test";

test("Launch the leafground url", async({page}) => {
    await page.goto('https://www.leafground.com/select.xhtml')
    const dropDown=page.locator('//select[@class="ui-selectonemenu"]/option')
    const DDcount=await dropDown.count()
    console.log(`the no of values in the dropdown ${DDcount}`)
    //console.log(await dropDown.nth(0).innerText())

for(let index=0;index<DDcount;index++){
   console.log(await dropDown.nth(index).innerText()) 
}
} )