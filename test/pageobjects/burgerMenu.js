import { $, expect } from '@wdio/globals'
import LoginPage from './loginPage.js'
import InventoryPage from './inventoryPage.js'
import Page from './page.js';
import loginPage from './loginPage.js';

class BurgerMenu extends Page {
    
    get burgerbutton(){
        return $('#react-burger-menu-btn');
    }
    get logoutbtn(){
        return $('#logout_sidebar_link');
    }
    get inventoryFullButton(){
	    return $('#inventory_sidebar_link'); 
    }
    get aboutButton(){
	    return $('#about_sidebar_link'); 
    }
    get resetCartButton(){
	    return $('#reset_sidebar_link')
    }

    get cartBadge(){
        return $('span.shopping_cart_badge');
    }

    get sauceLabsLogo(){
        return $('[alt=Saucelabs]')
    }
    get searchbutton(){
        return $('[alt=search]');

    }

    async hmInventoryFullCheck() {
        //arrange and act: open and login, then click on hamburger and inventory full link
	    await LoginPage.getStarted();
        await this.burgerbutton.click();
	    await this.inventoryFullButton.click();
        //assertions: has url with inventory at the end.
	    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

    }
    
    async hmAboutRedirectLinkCheck() {
        //arrange and act: open and login, then click on hamburger and about link
        await LoginPage.getStarted();
	    await this.burgerbutton.click();
        await browser.pause(1200);
	    await this.aboutButton.click();
        await browser.pause(1200);
        await browser.waitUntil(async () => {
            await expect (this.searchbutton).toBeDisplayed();
            const url = await browser.getUrl();
            const state = await browser.execute(() => document.readyState);
            return url.includes('saucelabs.com') && state === 'complete';
        }, {
            timeout: 10000,
            timeoutMsg: 'Expected page to load within 10s'
        });
       //await browser.pause(2000);
        //assertions: has url with saucelabs.com
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        //await expect(this.sauceLabsLogo).toBeDisplayed();
        
        //waitForDisplayed({ timeout: 5000 });
    }


    async hmLogout(){
        //arrange and act: open and login, then click on hamburger and logout
        await LoginPage.getStarted();
        await this.burgerbutton.click();
        await this.logoutbtn.click();
        //assertions: logs out to the login page
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect(LoginPage.btnLogin).toBeDisplayed();
        //To use later when I get it working: 
        // Assert we're still on the login page (forward navigation blocked)
        // const urlBeforeForward = await browser.getUrl();
        // await browser.forward();
        // const urlAfterForward = await browser.getUrl();
        // // Verify URL didn't change
        // expect(urlBeforeForward).toBe(urlAfterForward);
    }

    async hmResetCartCheck() {
        //arrange and act: open and login, add items to cart
        await LoginPage.getStarted();
         for (const item of InventoryPage.itemsMainInvPage) {
            await item.click();
        }
        //assertions: cart count badge says 6
        const badgeTextBeforeReset = await this.cartBadge.getText();
        const actualCountBeforeReset = parseInt(badgeTextBeforeReset, 10);
        await expect(actualCountBeforeReset).toBe(6);
        console.log(`Cart has ${actualCountBeforeReset} items before reset`);
        //act: open hamburger and click reset button
	    await this.burgerbutton.click();
	    await this.resetCartButton.click();
        // await browser.pause(2000); // pauses for to allow UI to update
	    //assertions: cart count badge does not exist
        const badgeExists = await this.cartBadge?.isExisting() ?? false;
        await expect(badgeExists).toBe(false);    
        console.log("Cart has been reset successfully");

    }
}
    


export default new BurgerMenu();