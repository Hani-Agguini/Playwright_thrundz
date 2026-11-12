import { Page } from "@playwright/test"

export class HomePage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        messagerie :      ()=> this.page.getByText('Messagerie'),
        events :      ()=> this.page.getByRole('button', { name: 'Mes Événts' }),
        agenda :      ()=> this.page.getByRole('button', { name: 'Agenda' }),
    }
async clickMessagerie() {
        await this.Elements.messagerie().click()
    }
async clickEvents() {
        await this.Elements.events().click()
    }
async clickAgenda() {
        await this.Elements.agenda().click()
    }
}
