import { test, expect } from '@playwright/test'
import {loadHomePage} from '../helpers'

test.describe.skip('Test suite', () => {
    test('Simple basic test', async ({ page }) => {
        await page.goto('https://www.example.com')
        const title = await page.locator('h1')
        await expect(title).toContainText('Example Domain')
    })
    
    test('Click test',async ({page}) => {
        await page.goto('http://zero.webappsecurity.com')
        await page.click('#signin_button')
        await page.click('text=Sign in')
        
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong')
    })
    
    test.skip('Selectors example',async ({page}) => {
    
        //text
        await page.locator('text=Some text')
    
        //css
        await page.click('button')
        await page.locator('#id')
        await page.click('.class')
    
        //Only visible css selector
        await page.click('.submit-button:visible')
    
        //Combinations
        await page.locator('#username .first')
    
        //xpath
        await page.click('//button[@id="id"]')
        
    })
    
    test('working with inputs',async ({page}) => {
        await page.goto('http://zero.webappsecurity.com')
        await page.click('#signin_button')
        
        await page.type('#user_login', 'admin')
        await page.type('//input[@id="user_password"]', 'password')
    
        await page.click('text=Sign in')
    
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong')
    })
    
    test('Assertions support @smoke',async ({page}) => {
        await page.goto('http://zero.webappsecurity.com')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/')
        await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards')
    
        const signInButton = await page.locator('#signin_button')
        await expect(signInButton).toBeVisible()
        await expect(signInButton).toBeEnabled()
    
        await expect(signInButton).toHaveCount(1)
    })  

    test('Assertions support',async ({page}) => {
        await page.goto('http://zero.webappsecurity.com')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/')
        await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards')
    
        const signInButton = await page.locator('#signin_button')
        await expect(signInButton).toBeVisible()
        await expect(signInButton).toBeEnabled()
    
        await expect(signInButton).toHaveCount(1)
    })
})

test.skip("Full page screenshot",async ({page}) => {
    await page.goto('http://zero.webappsecurity.com')
    await page.screenshot({path: "screenshots/screenshots.png", fullPage: true})
})

test.skip("Single element screenshot",async ({page}) => {
    await page.goto('http://zero.webappsecurity.com')
    const signInButton = await page.locator('#signin_button')
    await signInButton.screenshot({path: "screenshots/signIn.png"})
})

test.describe.skip("Before hook", () => {
    
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com')
    })

    test('working with inputs',async ({page}) => {

        await page.click('#signin_button')
        
        await page.type('#user_login', 'admin')
        await page.type('//input[@id="user_password"]', 'password')
    
        await page.click('text=Sign in')
    
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong')
    })
    
    test('Assertions support @smoke',async ({page}) => {
        await expect(page).toHaveURL('http://zero.webappsecurity.com/')
        await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards')
    
        const signInButton = await page.locator('#signin_button')
        await expect(signInButton).toBeVisible()
        await expect(signInButton).toBeEnabled()
    
        await expect(signInButton).toHaveCount(1)
    })
})

test.skip("Custom functions",async ({page}) => {
        //await expect(page).toHaveURL('http://zero.webappsecurity.com/')
        await loadHomePage(page, 'http://zero.webappsecurity.com/')
        await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards')
    
        const signInButton = await page.locator('#signin_button')
        await expect(signInButton).toBeVisible()
        await expect(signInButton).toBeEnabled()
        await expect(signInButton).toHaveCount(1)
})


test.skip("Playwright debugger",async ({page}) => {
    //await expect(page).toHaveURL('http://zero.webappsecurity.com/')
    await loadHomePage(page, 'http://zero.webappsecurity.com/')
    await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards')
    //await page.pause()

    await page.click('#signin_button')
        
    await page.type('#user_login', 'admin')
    await page.type('//input[@id="user_password"]', 'password')

    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong-fail')
})

