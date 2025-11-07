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
    
    async cartAmtIndicator(z) {
    const cartBadge = await $x(`//a/span[text()='${z}']`);
    
        if (z === 0) {
            const exists = await cartBadge.isExisting().toBe(false);
            console.log("Cart is empty");

        } 
        else {
            await expect(cartBadge).toBeDisplayed();
        
            const actualCount = await cartBadge.getText();
            const actualNumber = parseInt(actualCount);
            console.log(`Cart has ${z} items`);
            return true;
        }
    }
    //expect(actualNumber).toBe(z);
    // async cartAmtIndicator(z){
    //     const cartBadge = await $x(`//a/span[text()='${z}']`);

    //     if(await cartBadge.isExisting()){
    //      console.log(`cart has ${z} items`);
    //      await expect(cartBadge).toBeDisplayed();
    //      return cartBadge;
    //     }
    //     else{
    //         console.log("cart is empty")
    //         return true;
    //     }
        
    
    //}
        
    
    // (){
        
        
    //     //return $x('//a/span[text()="z"]')
    // }
    

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