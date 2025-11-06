import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/inventory.js'
import BurgerMenu from '../pageobjects/hamburgermenu.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open()
        // await LoginPage.login('standard_user', 'secret_sauce')
       // await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
       LoginPage.getStarted();
    
    })
})

describe('Hamburger Test', () => {
    it('should log out completely', async () => {
        BurgerMenu.hmLogout
    })
    it('inventory', async()=>{
    })
    
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
    })
})