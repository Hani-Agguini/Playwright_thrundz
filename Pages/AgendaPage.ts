import { Page } from "@playwright/test"

export class AgendaPage {

    readonly page: Page


    constructor(p: Page) {
        this.page = p;
    }

    Elements = {

        event : (u:string)=> this.page.getByRole('button', { name: new RegExp('^' + u) }).nth(0),

    }

    async clickEvent(u:string) {
        await this.Elements.event(u).click()
    }

}