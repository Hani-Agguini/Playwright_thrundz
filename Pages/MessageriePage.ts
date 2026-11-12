import { Page } from "@playwright/test"

export class MessageriePage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        personne :(u:string)=> this.page.getByText(u),
        message :()=> this.page.getByRole('textbox', { name: 'Votre message…' }),
        envoyer :()=> this.page.locator("main section form button"),

    }

    async clickPersonne(u:string) {
        await this.Elements.personne(u).click()
    }

    async setMessage(m:string) {
        await this.Elements.message().fill(m)
    }
    async clickEnvoyer() {
        await this.Elements.envoyer().click()
    }

    

}