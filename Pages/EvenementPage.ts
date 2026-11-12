import { Page } from "@playwright/test"

export class EvenementPage {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

    Elements = {
        event_fav : ()=> this.page.getByRole('button', { name: 'Modifier l\'événement' }).nth(0),
        modif_event : ()=> this.page.getByRole('button', { name: 'Modifier quelle est la date et l\'heure ?' }),
        date_event : ()=> this.page.locator("input"),
        modif_nom_event : ()=> this.page.getByRole('button', { name: "Modifier quel est le nom de l'événement ?" }),
        enregistrer_event : ()=> this.page.getByRole('button', { name: 'Enregistrer' }),
        enregistrer_modif_event : ()=> this.page.getByRole('button', { name: 'Enregistrer les modifications' })
    }

    async clickEventFav() {
        await this.Elements.event_fav().click()
    
    }
    async clickModifEvent() {
        await this.Elements.modif_event().click()
    }

    async setDateEvent(date: string) {
        await this.Elements.date_event().fill(date)
    }
    async clickEnregistrerEvent() {
        await this.Elements.enregistrer_event().click()
    }
    async clickEnregistrerModifEvent() {
        await this.Elements.enregistrer_modif_event().click()
    }

    async clickModifNomEvent() {
        await this.Elements.modif_nom_event().click()
    }

    async getnomEvent() {
        return await this.Elements.date_event().getAttribute("value")
    }
}