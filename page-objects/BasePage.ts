import {expect, Locator, Page} from '@playwright/test'

export class BasePage{
    readonly page:Page

    constructor(page: Page){
        this.page = page
    }

   async visitHomePage () {
        //await this.page.goto("http://zero.webappsecurity.com/")
        await this.page.goto("/")
   }

}