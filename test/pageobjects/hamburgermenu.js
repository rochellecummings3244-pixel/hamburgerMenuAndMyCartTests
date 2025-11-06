import { $ } from '@wdio/globals'
import Page from './page.js';

class BurgerMenu extends Page {
    
    get burgerbutton(){
        return $('#react-burger-menu-btn');
    }
    get logoutbtn(){
        return $('#logout_sidebar_link');
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

}

export default new BurgerMenu();