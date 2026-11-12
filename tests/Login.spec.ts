import { expect, test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import {Ajouterevents} from"../Pages/ajouterevents"

let LoP : LoginPage
let AjE: Ajouterevents
const nomEvent      = "Event Test Auto"
const tarifNom      = "Etudiant"
const tarifPrix     = "100"
const adresse       = "10 rue de Rivoli Paris"
const description   = "Description de test automatisé pour vérifier la création d'un événement." 
const imageEvent    = "test-data\\image.jpg"   
 

const dateFuture = new Date()
dateFuture.setDate(dateFuture.getDate() + 7)
const dateISO = dateFuture.toISOString().split("T")[0]          
const dateFR  = dateFuture.toLocaleDateString("fr-FR")          

test("login",async ({page}) => {
    LoP = new LoginPage(page)

    // aller sur la page d'acceuil
    await page.goto("https://preprod.thrundrz.fr/")
    
    // verifier que je suis sur la page d'acceuil"https://app.thrundrz.com/"
    await expect(page).toHaveURL("https://preprod.thrundrz.fr/")

    // cliquer sur le bouton login
    await LoP.clickEspaceCreateur()   

    // verfier que je suis sur la page de login
    await expect(page).toHaveURL("https://preprod.thrundrz.fr/devenir-partenaire")

    // remplir mail et password
    await LoP.setEmail("c1@createur.fr")
    await LoP.setmdps("123456789")
    
    // cliquer sur le bouton login
    await LoP.clickseconnecter()

    await expect(page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient")
})


 
test("Créateur c1 - ajouter un événement complet", async ({ page }) => {
    LoP = new LoginPage(page)
    AjE = new Ajouterevents(page)
 
    
        await page.goto("https://preprod.thrundrz.fr/")
        await expect(page).toHaveURL("https://preprod.thrundrz.fr/")
 
        await LoP.clickEspaceCreateur()
        await expect(page).toHaveURL("https://preprod.thrundrz.fr/devenir-partenaire")
 
        await LoP.setEmail("c1@createur.fr")
        await LoP.setmdps("123456789")
        await LoP.clickseconnecter()
 
        await expect(page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient")
 
  
        await AjE.clickbtnajouter()
        await expect(page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient/mesevents/ajouter")
 
   
        await AjE.setImage(imageEvent)
        await expect(AjE.Elements.msg_1()).toBeVisible()
 
        await expect(AjE.Elements.qst_2()).toBeVisible()
        await AjE.clickcontinue()
 
        await expect(AjE.Elements.qst_3()).toBeVisible()
        await expect(AjE.Elements.msg_2()).toBeVisible()
        await expect(AjE.Elements.qst_4()).toBeVisible()
        await AjE.setCategorie("Concert")      
        await AjE.clickenvoyer1()
        await expect(AjE.Elements.msg_3()).toBeVisible()
 
   
    await test.step("Saisir le nom de l'événement", async () => {
        await expect(AjE.Elements.qst_5()).toBeVisible()
        await AjE.setTitre(nomEvent)
        await AjE.clickenvoyer5()

        await expect(AjE.Elements.msg_4()).toBeVisible()
        await expect(AjE.Elements.msg_4()).toContainText(nomEvent)
    })

      await test.step("Saisir une date future", async () => {
        await expect(AjE.Elements.qst_6()).toBeVisible()
        await AjE.setDate(dateISO)
        await AjE.clickenvoyer6()
        await expect(AjE.Elements.msg_5()).toBeVisible()
        await expect(AjE.Elements.msg_5()).toContainText(dateFR)
    })
 
    await test.step("Saisir la durée (2h)", async () => {
        await expect(AjE.Elements.qst_7()).toBeVisible()
        await AjE.setDuree("2")                    
        await AjE.clickenvoyer7()
        await expect(AjE.Elements.msg_6()).toBeVisible()
    })
 
    await test.step("Cliquer sur Non", async () => {
        await expect(AjE.Elements.qst_8()).toBeVisible()
        await AjE.clicknp()
        await expect(AjE.Elements.msg_7()).toBeVisible()
    })
 
    await test.step("Ajouter le tarif Etudiant à 100€", async () => {
        await expect(AjE.Elements.qst_9()).toBeVisible()
        await AjE.setTitreTarif(tarifNom)
        await AjE.clickenvoyer9()
        await expect(AjE.Elements.msg_8()).toContainText(tarifNom)
 
        await expect(AjE.Elements.qst_10()).toBeVisible()
        await AjE.setPrix(tarifPrix)
        await AjE.clickenvoyer10()
        await expect(AjE.Elements.msg_9()).toContainText(tarifPrix)
    })
 
    await test.step("C'est tout pour les tarifs", async () => {
        await expect(AjE.Elements.qst_11()).toBeVisible()
        await AjE.clickcontinuetarif()
        await expect(AjE.Elements.msg_10()).toBeVisible()
    })
 
    await test.step("Choisir Présentiel", async () => {
        await expect(AjE.Elements.qst_12()).toBeVisible()
        await AjE.clickpresentiel()
        await expect(AjE.Elements.msg_11()).toBeVisible()
    })
 
    
    await test.step("Taper l'adresse et choisir la première suggestion", async () => {
        await expect(AjE.Elements.qst_13()).toBeVisible()
        await AjE.Elements.champs_adresse().fill(adresse)
        await page.getByRole("option").first().click()
        await expect(AjE.Elements.msg_12()).toBeVisible()
    })
 

    await test.step("Restauration : Non", async () => {
        await expect(AjE.Elements.qst_15()).toBeVisible()
        await AjE.clickrestau()
        await expect(AjE.Elements.msg_13()).toBeVisible()
    })
 
    await test.step("Parking : Oui", async () => {
        await expect(AjE.Elements.qst_16()).toBeVisible()
        await AjE.clickparking()
        await expect(AjE.Elements.msg_14()).toBeVisible()
    })
 
    await test.step("Accessibilité (Q17)", async () => {
        await expect(AjE.Elements.qst_17()).toBeVisible()
        await AjE.clickaccess()
        await expect(AjE.Elements.msg_15()).toBeVisible()
    })
 
    await test.step("Handicap : Oui", async () => {
        await expect(AjE.Elements.qst_18()).toBeVisible()
        await AjE.clickhandicap()
        await expect(AjE.Elements.msg_16()).toBeVisible()
    })
 
    await test.step("Choisir Lien externe", async () => {
        await expect(AjE.Elements.qst_19()).toBeVisible()
        await AjE.clicklien()
        await expect(AjE.Elements.msg_17()).toBeVisible()
    })
 
    await test.step("Saisir l'URL de la page comme lien billetterie", async () => {
        await expect(AjE.Elements.qst_20()).toBeVisible()
        const urlPage = page.url()              
        await AjE.setLienBillets(urlPage)
        await AjE.clickenvoyer20()
        await expect(AjE.Elements.msg_18()).toBeVisible()
    })
 
 
    
    await test.step("Saisir une description (min 20 caractères)", async () => {
        await expect(AjE.Elements.qst_21()).toBeVisible()
        expect(description.length).toBeGreaterThanOrEqual(20)
        await AjE.setDescription(description)
        await AjE.clickcontinuer21()
        await expect(AjE.Elements.msg_19()).toBeVisible()
    })
 
    await test.step("Envoyer et vérifier le message de succès", async () => {
        await expect(AjE.Elements.qst_22()).toBeVisible()
 
       
        const alerte = AjE.Elements.msg_final()
        const attenteAlerte = alerte.waitFor({ state: "visible" })
        await AjE.Elements.btn_envoyer22().click()
        await attenteAlerte
 
        await expect(alerte).toContainText(/succès/i)
    })
 


























})