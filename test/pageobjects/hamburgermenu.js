import { $, expect } from '@wdio/globals'
import LoginPage from './login.page.js'
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

    get cartBadge(){
        return $('span.shopping_cart_badge');
    }


    async hmInventoryFullCheck() {
	    await $(this.burgerbutton).click();
	    await $(this.inventoryFullButton).click();
	    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory');
    }


    async hmAboutRedirectLinkCheck(){
	    await $(this.burgerbutton).click();
	    await $(this.aboutButton).click();
        await expect(browser).toHaveUrl(expect.stringContaining('saucelabs.com'));
    }


    async hmLogout(){
        //arrange and act: open and login, then click on hamburger and logout
        await LoginPage.open()
        await this.burgerbutton.click();
        await this.logoutbtn.click();
        //assertions:
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect(this.btnLogin).toBeDisplayed();
        //To use later when I get it working: 
        // Assert we're still on the login page (forward navigation blocked)
        // const urlBeforeForward = await browser.getUrl();
        // await browser.forward();
        // const urlAfterForward = await browser.getUrl();
        // // Verify URL didn't change
        // expect(urlBeforeForward).toBe(urlAfterForward);
    }

    async hmResetCartCheck(){
	    await $(this.burgerbutton).click();
	    await $(this.resetCartButton).click();
	    //await {{{{{}}}}}}}}
    }

      async cartButtonCountExists(expected) {
        const badgeExists = await this.cartBadge.isExisting();
        if(!badgeExists){
            console.log("Cart is empty");
            return false;
        }
        const text = await this.cartBadge.getText();
        const actualCount = parseInt(text, 10);
        console.log(`Cart has ${actualCount} items`);

        expect(actualCount).toBe(expected);
        return true;
    
    }
}

export default new BurgerMenu();