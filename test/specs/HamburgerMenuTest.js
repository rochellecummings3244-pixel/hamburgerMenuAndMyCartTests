import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import BurgerMenu from '../pageobjects/burgerMenu.js'




describe('Hamburger Test', () => {
    
    it('inventory page redirect check', async()=> {
        await BurgerMenu.hmInventoryFullCheck()
    })

    it('should log out completely', async () => {
        await BurgerMenu.hmLogout()
    })

    it('Reset Button resets the cart count', async () => {
        await BurgerMenu.hmResetCartCheck()
    })

    // it('About button redirects to new webpage', async () => {
    //     await BurgerMenu.hmAboutRedirectLinkCheck()
    // })
})