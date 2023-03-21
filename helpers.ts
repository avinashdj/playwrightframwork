import { Page } from "@playwright/test";

export async function loadHomePage(page:Page, url:string){
    await page.goto(url)
}