import { Page } from "@playwright/test"

export class LandingPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        espace_createur :      ()=> this.page.getByRole('link', { name: 'Espace Créateur' }).nth(0),
}
    async clickEspaceCreateur() {
        await this.Elements.espace_createur().click()
    }
}