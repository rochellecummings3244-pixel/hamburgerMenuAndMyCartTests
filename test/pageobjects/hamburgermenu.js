import { $ } from '@wdio/globals'
import Page from './page.js';

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
	return $('#inventory_sidebar_link')
    }



    async hmLogout(){
        await $(this.burgerbutton).click();
        await $(this.logoutbtn).click();

        const urlBeforeForward = await browser.getUrl();
        await browser.forward();
        const urlAfterForward = await browser.getUrl();

        // Verify URL didn't change
        expect(urlBeforeForward).toBe(urlAfterForward);

        // Assert we're still on the login page (forward navigation blocked)
        //await expect(browser).toHaveUrl(expect.stringContaining('saucedemo.com'));
        await expect(browser).not.toHaveUrl(expect.stringContaining('inventory'));
        await expect(this.btnLogin).toBeDisplayed();
    }
    async hmInventoryFullCheck(){
	    await $(this.burgerbutton).click();
	    await $(this.inventoryFullButton).click();
	    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory');
    }
    async hmAboutRedirectLinkCheck(){
	    await $(this.burgerbutton).click();
	    await $(this.aboutButton).click();
        await expect(browser).toHaveUrl(expect.stringContaining('saucelabs.com'));
    }
    async hmResetCartCheck(){
	    await $(this.burgerbutton).click();
	    await $(this.resetCartButton).click();
	    //await {{{{{}}}}}}}}
    }
}

export default new BurgerMenu();