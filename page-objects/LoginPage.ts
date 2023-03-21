import {expect, Locator, Page} from '@playwright/test'
import {BasePage} from './BasePage'

export class LoginPage extends BasePage{
    //Selectors
    //readonly page: Page
    readonly loginInput : Locator
    readonly passwordInput : Locator
    readonly signInButton : Locator
    readonly errorMessage : Locator
    
    //initialize selectors in the constructor
    constructor(page:Page){
        super(page)
        //this.page = page
        this.loginInput = page.locator("#user_login")
        this.passwordInput = page.locator("#user_password")
        this.signInButton = page.locator("text=Sign in")
        this.errorMessage = page.locator(".alert-error")
    }

    //Define Login page methods

    async enterUserId(userId : string){
        await this.loginInput.type(userId)
    }

    async enterPassword(password : string){
        await this.passwordInput.type(password)
    }

   async clickSignInButton() {
        await this.signInButton.click()
   }

   async login(userId: string, password: string){
        await this.enterUserId(userId)
        await this.enterPassword(password)
        await this.clickSignInButton()
        await this.page.goto("http://zero.webappsecurity.com/index.html")
   }

   async getInvalidLoginError(){
        return await this.errorMessage.textContent()
   }
}