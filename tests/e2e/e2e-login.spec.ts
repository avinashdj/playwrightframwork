import {expect, test} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe("Login/Logout tests", () => {

    let loginPage: LoginPage
    let homePage: HomePage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        await loginPage.visitHomePage()
        await homePage.clickSignInButton()
    })

    test.fixme("negative scenario",async ({page}) => {
        await loginPage.login('admin', 'admin')
        const errorMessage = await loginPage.getInvalidLoginError()
        await expect(errorMessage).toContain('Login and/or password are wrong')
    })

    test("postive scenario",async ({page}) => {
        await loginPage.login('username', 'password')
        //await page.goto("http://zero.webappsecurity.com/index.html")
        await homePage.logOut()
    })

})