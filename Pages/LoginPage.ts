import { Page } from "@playwright/test"

export class LoginPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        espace_createur :      ()=> this.page.getByRole('link', { name: 'Espace Créateur' }).nth(0),
        email:                 ()=> this.page.getByRole('textbox', { name: 'Votre email' }),
        motdepasse:            ()=> this.page.getByRole('textbox', { name: '********' }),
        seconnecter:           ()=> this.page.getByRole('button', { name: 'Se connecter' }),

}
    async clickEspaceCreateur() {
        await this.Elements.espace_createur().click()
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