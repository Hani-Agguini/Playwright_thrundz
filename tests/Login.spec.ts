import { expect,test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";

let LoP : LoginPage

test("login",async ({page}) => {
    LoP = new LoginPage(page)

    // aller sur la page d'acceuil
    page.goto("https://preprod.thrundrz.fr/")
    
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