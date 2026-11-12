import { expect, test, Page } from "@playwright/test";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { MessageriePage } from "../Pages/MessageriePage";
import { EvenementPage } from "../Pages/EvenementPage";
import { AgendaPage } from "../Pages/AgendaPage";

let LaP: LandingPage;
let LaP2: LandingPage;

let LoP: LoginPage;
let LoP2: LoginPage;

let HP: HomePage;
let HP2: HomePage;

let MP: MessageriePage;
let MP2: MessageriePage;

let EP: EvenementPage;

let AP: AgendaPage;

let page1: Page;
let page2: Page;



test.beforeEach(async ({ browser }) => {

    // Création de deux contextes indépendants
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    // Création de deux pages
    page1 = await context1.newPage();
    page2 = await context2.newPage();

    LaP = new LandingPage(page1);
    LaP2 = new LandingPage(page2);

    LoP = new LoginPage(page1);
    LoP2 = new LoginPage(page2);

    // Aller sur la page d'accueil
    await page1.goto("https://preprod.thrundrz.fr/");
    await page2.goto("https://preprod.thrundrz.fr/");

    // Cliquer sur Espace créateur
    await LaP.clickEspaceCreateur();
    await LaP2.clickEspaceCreateur();

    // Vérifier les URL
    await expect(page1).toHaveURL(/devenir-partenaire/);
    await expect(page2).toHaveURL(/devenir-partenaire/);

    // Connexion utilisateur 1
    await LoP.setEmail("c1@createur.fr");
    await LoP.setmdps("123456789");

    // Connexion utilisateur 2
    await LoP2.setEmail("c2@createur.fr");
    await LoP2.setmdps("123456789");

    // Connexion des deux utilisateurs
    await LoP.clickseconnecter();
    await LoP2.clickseconnecter();

    // Vérification
    await expect(page1).toHaveURL(/EspaceClient/);
    await expect(page2).toHaveURL(/EspaceClient/);

});

test("test messagerie", async () => {

    HP = new HomePage(page1);
    HP2 = new HomePage(page2);

    await HP.clickMessagerie();
    await HP2.clickMessagerie();

    await expect(page1).toHaveURL(/messagerie/);
    await expect(page2).toHaveURL(/messagerie/);

    MP = new MessageriePage(page1);
    MP2 = new MessageriePage(page2);

    await MP.clickPersonne("Testeur");
    await MP2.clickPersonne("Marie");

    // message random
    let randomMessage = "Test" + Math.floor(Math.random() * 100000);
    await MP.setMessage(randomMessage);
    await MP.clickEnvoyer();
    await page2.getByText(randomMessage).waitFor({ state: "visible", timeout: 10000 });

    randomMessage += "reponse"
    await MP2.setMessage(randomMessage);
    await MP2.clickEnvoyer();
    await page1.getByText(randomMessage).waitFor({ state: "visible", timeout: 10000 });

        // message random
    randomMessage += "message2"
    await MP.setMessage(randomMessage);
    await MP.clickEnvoyer();
    await page2.getByText(randomMessage).waitFor({ state: "visible", timeout: 10000 });

    randomMessage += "reponse2"
    await MP2.setMessage(randomMessage);
    await MP2.clickEnvoyer();
    await page1.getByText(randomMessage).waitFor({ state: "visible", timeout: 10000 });


});

test("test ajout evenement", { tag: ["@even"] }, async () => {

    HP = new HomePage(page1);
    await HP.clickEvents();
    await expect(page1).toHaveURL(/mesevents/);

    EP = new EvenementPage(page1);
    await EP.clickEventFav();
    await expect(page1).toHaveURL(/update/);

    await EP.clickModifNomEvent();
    let nomEvent = await EP.getnomEvent();

    await EP.clickModifEvent();
    await EP.setDateEvent("2026-11-16T15:22");

    await EP.clickEnregistrerEvent();
    await EP.clickEnregistrerModifEvent();

    await expect(page1).toHaveURL(/mesevents/);

    await HP.clickAgenda();
    await expect(page1).toHaveURL(/agenda/);



    AP = new AgendaPage(page1);
    await AP.clickEvent("16 Novembre");

    // verification que le nom de l'événement est bien affiché 
    await expect(page1.getByRole('heading', { name : ''+nomEvent })).toBeVisible();
    



});

test.afterAll(async () => {
    // Fermeture des contextes
    await page1.context().close();
    await page2.context().close();
});