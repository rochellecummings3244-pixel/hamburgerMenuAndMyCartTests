import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'
import BurgerMenu from '../pageobjects/burgerMenu.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open()
        // await LoginPage.login('standard_user', 'secret_sauce')
       // await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
       LoginPage.getStarted();
    
    })
})

describe('Hamburger Test', () => {
    
    it('inventory page redirect check', async()=> {
        await BurgerMenu.hmInventoryFullCheck()
    })

    // it('About button redirects to new webpage', async () => {
    //     await BurgerMenu.hmAboutRedirectLinkCheck()
    // })

    // it('should log out completely', async () => {
       
    //     await BurgerMenu.hmLogout()
    // })

    // it('Reset Button resets the cart count', async () => {
    //     await BurgerMenu.hmResetCartCheck()
    // })
    // it('Cart has correct number of items indicator', async () => {
    //     console.log("CartBadge test running");
    //     await BurgerMenu.cartButtonCountExists(2)
    //     console.log("CartBadge test finished");
    // })
        // await $('#react-burger-menu-btn').click();
        // await $('#logout_sidebar_link').click();

        // const urlBeforeForward = await browser.getUrl();
        // await browser.forward();
        // const urlAfterForward = await browser.getUrl();

        // // Verify URL didn't change
        // expect(urlBeforeForward)===(urlAfterForward);

        // // Assert we're still on the login page (forward navigation blocked)
        // //await expect(browser).toHaveUrl(expect.stringContaining('saucedemo.com'));
        // await expect(browser).not.toHaveUrl(expect.stringContaining('inventory'));
        // await expect($('#login-button')).toBeDisplayed();
    //})
})