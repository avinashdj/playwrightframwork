import {test, expect} from '@playwright/test'

test.describe('Visual regression test', () => {
    test('full page screenshot', async ({ page }) => {
        await page.goto('https://www.example.com')
        expect(await page.screenshot()).toMatchSnapshot('homepage.png')
    })
})
