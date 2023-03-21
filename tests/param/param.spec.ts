import {test, expect} from '@playwright/test'
import {computerData} from './parameters'

computerData.forEach(data => {
    test(`Parameterized tests - ${data.name}`, async ({ page }) => {
        await page.goto('https://computer-database.gatling.io/computers')
        await page.click('#add')
        await page.type('#name',data.name)
        await page.locator('#company').selectOption(data.company)
        await page.click("input[type='submit']")
        expect(page.locator('div.alert-message.warning')).toContainText("Done")
    })
})

