import { Page } from "@playwright/test"


export class Ajouterevents {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

   Elements = {
        btn_ajouterevents :   ()=> this.page.getByRole('button', { name: 'Ajouter Évent' }),
        clickimage:     ()=> this.page.getByTestId("input-R1"),
        msg_1:    ()=> this.page.getByTestId("R1"),
        qst_2:    ()=> this.page.getByTestId("Q2"),
        btn_continue:   ()=> this.page.getByTestId("btn-envoyer-R1"),
        qst_3:    ()=> this.page.getByTestId("Q3"),
        msg_2:    ()=> this.page.getByTestId("R3"),
        qst_4:    ()=> this.page.getByTestId("Q4"),
        btn_categorie:  ()=> this.page.getByTestId("input-R4"),
        btn_envoyer1:    ()=> this.page.getByTestId("btn-envoyer-R4"),
        msg_3:    ()=> this.page.getByTestId("R4"),
        qst_5:    ()=> this.page.getByTestId("Q5"),
        titre_events:   ()=> this.page.getByTestId("input-R5"),
        btn_envoyer5:    ()=> this.page.getByTestId("btn-envoyer-R5"),
        msg_4:    ()=> this.page.getByTestId("R5"),
        qst_6:    ()=> this.page.getByTestId("Q6"),
        champs_date :    ()=> this.page.getByTestId("input-R6"),
        btn_envoyer6:    ()=> this.page.getByTestId("btn-envoyer-R6"),
        msg_5:    ()=> this.page.getByTestId("R6"),
        qst_7:    ()=> this.page.getByTestId("Q7"),
        champs_duree_events :    ()=> this.page.getByTestId("input-R7"),
        btn_envoyer7:    ()=> this.page.getByTestId("btn-envoyer-R7"),
        msg_6:    ()=> this.page.getByTestId("R7"),
        qst_8:    ()=> this.page.getByTestId("Q8"),
        btn_np : ()=> this.page.getByTestId("btn-envoyer-R8-non"),
        msg_7:    ()=> this.page.getByTestId("R8"),
        qst_9:    ()=> this.page.getByTestId("Q9"),
        champs_titre_tarif :    ()=> this.page.getByTestId("input-R9"),
        btn_envoyer9:    ()=> this.page.getByTestId("btn-envoyer-R9"),
        msg_8:    ()=> this.page.getByTestId("R9"),
        qst_10:    ()=> this.page.getByTestId("Q10"),
        champs_prix :  ()=> this.page.getByTestId("input-R10"),
        btn_envoyer10:    ()=> this.page.getByTestId("btn-envoyer-R10"),
        msg_9:    ()=> this.page.getByTestId("R10"),
        qst_11:    ()=> this.page.getByTestId("Q11"),
        btn_continue_tarif:    ()=> this.page.getByTestId("btn-envoyer-R11-non"),
        msg_10:    ()=> this.page.getByTestId("R11"),
        qst_12:    ()=> this.page.getByTestId("Q12"),
        btn_presentiel:    ()=> this.page.getByTestId("btn-envoyer-R12-presentiel"),
        msg_11:    ()=> this.page.getByTestId("R12"),
        qst_13:    ()=> this.page.getByTestId("Q13"),
        champs_adresse : ()=> this.page.getByTestId("input-R13"),
        msg_12:    ()=> this.page.getByTestId("R13"),
        qst_15:    ()=> this.page.getByTestId("Q15"),
        btn_qst_restau : ()=> this.page.getByTestId("btn-envoyer-R15-non"),
        msg_13:    ()=> this.page.getByTestId("R15"),
        qst_16:    ()=> this.page.getByTestId("Q16"),
        btn_qst_parking : ()=> this.page.getByTestId("btn-envoyer-R16-oui"),
        msg_14:    ()=> this.page.getByTestId("R16"),
        qst_17:    ()=> this.page.getByTestId("Q17"),
        btn_qst_access : ()=> this.page.getByTestId("btn-envoyer-R17-non"),
        msg_15:    ()=> this.page.getByTestId("R17"),
        qst_18:    ()=> this.page.getByTestId("Q18"),
        btn_qst_handicap : ()=> this.page.getByTestId("btn-envoyer-R18-oui"),
        msg_16:    ()=> this.page.getByTestId("R18"),
        qst_19:    ()=> this.page.getByTestId("Q19"),
        btn_lien : ()=> this.page.getByTestId("btn-envoyer-R19-externe"),
        msg_17:    ()=> this.page.getByTestId("R19"),
        qst_20:    ()=> this.page.getByTestId("Q20"),
        champs_lien_billets : ()=> this.page.getByTestId("input-R20"),
        btn_envoyer20:    ()=> this.page.getByTestId("btn-envoyer-R20"),
        msg_18:    ()=> this.page.getByTestId("R20"),
        qst_21:    ()=> this.page.getByTestId("Q21"),
        champs_description:    ()=> this.page.getByPlaceholder("Écrivez votre description ici..."),
        btn_continuer21:    ()=> this.page.getByTestId("btn-envoyer-R21"),
        msg_19:    ()=> this.page.getByTestId("R21"),
        qst_22:    ()=> this.page.getByTestId("Q22"),
        btn_envoyer22:    ()=> this.page.getByTestId("btn-envoyer-R22"),
        msg_final:        ()=> this.page.getByRole("alert"),
}


    async clickbtnajouter() {
        await this.Elements.btn_ajouterevents().click()
    }
 
    async setImage(chemin:string) {
        await this.Elements.clickimage().setInputFiles(chemin)
    }
 
    async clickcontinue() {
        await this.Elements.btn_continue().click()
    }
 
    async setCategorie(c:string) {
        await this.Elements.btn_categorie().fill(c)
    }
 
    async clickenvoyer1() {
        await this.Elements.btn_envoyer1().click()
    }
 
    async setTitre(t:string) {
        await this.Elements.titre_events().fill(t)
    }
 
    async clickenvoyer5() {
        await this.Elements.btn_envoyer5().click()
    }
 
    async setDate(d:string) {
        await this.Elements.champs_date().fill(d)
    }
 
    async clickenvoyer6() {
        await this.Elements.btn_envoyer6().click()
    }
 
    async setDuree(d:string) {
        await this.Elements.champs_duree_events().fill(d)
    }
 
    async clickenvoyer7() {
        await this.Elements.btn_envoyer7().click()
    }
 
    async clicknp() {
        await this.Elements.btn_np().click()
    }
 
    async setTitreTarif(t:string) {
        await this.Elements.champs_titre_tarif().fill(t)
    }
 
    async clickenvoyer9() {
        await this.Elements.btn_envoyer9().click()
    }
 
    async setPrix(p:string) {
        await this.Elements.champs_prix().fill(p)
    }
 
    async clickenvoyer10() {
        await this.Elements.btn_envoyer10().click()
    }
 
    async clickcontinuetarif() {
        await this.Elements.btn_continue_tarif().click()
    }
 
    async clickpresentiel() {
        await this.Elements.btn_presentiel().click()
    }
 
    async setAdresse(a:string) {
        await this.Elements.champs_adresse().fill(a)
        await this.Elements.champs_adresse().press("Enter")
    }
 
    async clickrestau() {
        await this.Elements.btn_qst_restau().click()
    }
 
    async clickparking() {
        await this.Elements.btn_qst_parking().click()
    }
 
    async clickaccess() {
        await this.Elements.btn_qst_access().click()
    }
 
    async clickhandicap() {
        await this.Elements.btn_qst_handicap().click()
    }
 
    async clicklien() {
        await this.Elements.btn_lien().click()
    }
 
    async setLienBillets(l:string) {
        await this.Elements.champs_lien_billets().fill(l)
    }
 
    async clickenvoyer20() {
        await this.Elements.btn_envoyer20().click()
    }
 
    async setDescription(d:string) {
        await this.Elements.champs_description().fill(d)
    }
 
    async clickcontinuer21() {
        await this.Elements.btn_continuer21().click()
    }
 
    async clickenvoyer22EtVerifierAlerte(texte:string) {
        const attenteAlerte = this.Elements.msg_final().waitFor({ state: "visible" })
        await this.Elements.btn_envoyer22().click()
        await attenteAlerte
        //await expect(this.Elements.msg_final()).toContainText(texte)
    }
 
    /*async verifierVisible(nom: keyof LoginPage["Elements"]) {
        await expect(this.Elements[nom]()).toBeVisible()
    }
 
    async verifierTexte(nom: keyof LoginPage["Elements"], texte:string) {
        await expect(this.Elements[nom]()).toContainText(texte)
    }*/
}