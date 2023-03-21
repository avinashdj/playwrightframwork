import {expect, Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage'

export class HomePage extends BasePage{

    //readonly page:Page
    readonly signInButton : Locator
    readonly userNameLabel : Locator
    readonly logoutLink : Locator

    constructor(page){
        super(page)
        //this.page = page
        this.signInButton = page.locator('#signin_button')
        this.userNameLabel = page.locator('text=username')
        this.logoutLink = page.locator('#logout_link:visible')
    }

    async clickSignInButton(){
        await this.signInButton.click()
    }

   async logOut(){
        await this.userNameLabel.click()
        await this.logoutLink.click()
   }
}