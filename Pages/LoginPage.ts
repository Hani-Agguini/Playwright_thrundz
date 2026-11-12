import { Page } from "@playwright/test"

export class LoginPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        email:                 ()=> this.page.getByRole('textbox', { name: 'Votre email' }),
        motdepasse:            ()=> this.page.getByRole('textbox', { name: '********' }),
        seconnecter:           ()=> this.page.getByRole('button', { name: 'Se connecter' }),

}

     async setEmail(u:string) {
        await this.Elements.email().fill(u)
    }

     async setmdps(p:string) {
        await this.Elements.motdepasse().fill(p)
    }

     async clickseconnecter() {
        await this.Elements.seconnecter().click()
    }

}