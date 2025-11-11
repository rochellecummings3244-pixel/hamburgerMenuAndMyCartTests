import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginPage from './loginPage.js';


class InventoryPage extends Page {
    //Adding to cart buttons
    get addBackpackMainInvPageBtn(){
	    return $('#add-to-cart-sauce-labs-backpack')
    }
    get addBikeLightMainInvPageBtn(){
	    return $('#add-to-cart-sauce-labs-bike-light')
    }
    get addBoltTShirtMainInvPageBtn(){
	    return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get addFleeceJacketMainInvPageBtn(){
	    return $('#add-to-cart-sauce-labs-fleece-jacket')
    }
    get addOnesieMainInvPageBtn(){
	    return $('#add-to-cart-sauce-labs-onesie')
    }
    get addAllThingsTShirtMainInvPageBtn(){
	    return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    get allInventoryItems() {
        return $$('.inventory_item');
    }

    get itemsMainInvPage() {
        return [
            this.addBackpackMainInvPageBtn, 
            this.addBikeLightMainInvPageBtn, 
            this.addBoltTShirtMainInvPageBtn,
            this.addFleeceJacketMainInvPageBtn, 
            this.addOnesieMainInvPageBtn,
            this.addAllThingsTShirtMainInvPageBtn
        ];
    }

    //removing from cart selectors: 
    get removeBackpackIndPageBtn(){
	    return $('#remove-sauce-labs-backpack')
    }
    get removeBikeLightIndPageBtn(){
	    return $('#remove-sauce-labs-bike-light')
    }
    get removeBoltTShirtIndPageBtn(){
	    return $('#remove-sauce-labs-bolt-t-shirt')
    }
    get removeFleeceJacketIndPageBtn(){
	    return $('#remove-sauce-labs-fleece-jacket')
    }
    get removeOnesieIndPageBtn(){
	    return $('#remove-sauce-labs-onesie')
    }
    get removeAllThingsTShirtIndPageBtn(){
	    return $('[id="remove-test.allthethings()-t-shirt-(red)"]')
    }
    get itemsRemoveBtns() {
        return [
            this.removeBackpackIndPageBtn, 
            this.removeBikeLightIndPageBtn, 
            this.removeBoltTShirtIndPageBtn,
            this.removeFleeceJacketIndPageBtn, 
            this.removeOnesieIndPageBtn,
            this.removeAllThingsTShirtIndPageBtn
        ];
    }

    get cartBadge(){
        return $('span.shopping_cart_badge');
    }

    async addRemoveCartCheck() {
        //arrange and act: open and login, then add all six items to cart
        await LoginPage.getStarted();
        for (const item of this.itemsMainInvPage) {
            await item.click();
        }
        const badgeText = await this.cartBadge.getText();
        const actualCount = parseInt(badgeText, 10);
        await expect(actualCount).toBe(this.itemsMainInvPage.length);
        console.log(`Cart has ${actualCount} items`);
        //remove items one at a time from cart
        for (const removeBtn of this.itemsRemoveBtns) {
            await removeBtn.click();
        }
        //assertion: cart badge is gone
        const badgeExists = await this.cartBadge?.isExisting() ?? false;
        await expect(badgeExists).toBe(false);    
        console.log("All items removed from cart successfully");
    }
    get cartBtn(){
        return $('.shopping_cart_link');
    }
    get returnShoppingBtn(){
        return $('#continue-shopping');
    }
    
    get checkoutBtn(){
        return $('[name=checkout]');
    }

     get backpackIndPageBtn(){
	    return $('[alt="Sauce Labs Backpack"]')
    }
    get bikeLightIndPageBtn(){
	    return $('[alt="Sauce Labs Bike Light"]')
    }
    get boltTShirtIndPageBtn(){
	    return $('[alt=”Sauce Labs Bolt T-Shirt”]')
    }
    get fleeceJacketIndPageBtn(){
	    return $('[alt=”Sauce Labs Fleece Jacket”]')
    }
    get onesieIndPageBtn(){
	    return $('[alt=”Sauce Labs Onesie”]')
    }
    get allThingsTShirtIndPageBtn(){
	    return $('[alt="Test.allTheThings() T-Shirt (Red)"]')
    }
    get addToCartBtn(){
	    return $('#add-to-cart')
    }
    get removeBtn(){
	    return $('#remove')
    }

    async openItemPage(itemImageElement) {
        await itemImageElement.click();
        
    }

    async addItemToCart() {
        await this.addToCartBtn.click();
        await expect(BurgerMenu.cartBadge).toHaveText('1');
    }

    async removeItemFromCart() {
        await this.removeBtn.click();
        const badgeExists = await this.cartBadge?.isExisting() ?? false;
        await expect(badgeExists).toBe(false);  
    }

    get individualItemBtns(){
        return [
            this.backpackIndPageBtn,
            this.bikeLightIndPageBtn,
            this.boltTShirtIndPageBtn,
            this.fleeceJacketIndPageBtn,
            this.onesieIndPageBtn,
            this.allThingsTShirtIndPageBtn
        ];
    }
    
    get cartItemLinks(){
        return [
            $('#item_0_title_link'),
            $('#item_1_title_link'),
            $('#item_2_title_link'),
            $('#item_3_title_link'),
            $('#item_4_title_link'),
            $('#item_5_title_link')
        ]
    }

    async returnShoppingTest(){
        //arrange and act: login, open cart page, and click return to shopping
        await LoginPage.getStarted();
        await this.cartBtn.click();
        await this.returnShoppingBtn.click();
        //assertion: returns to inventory page
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    }
    async checkoutTest(){
        //arrange and act: login, open cart page, add items, and click to checkout
        await LoginPage.getStarted();
        for (const item of this.itemsMainInvPage) {
            await item.click();
        }
        const badgeText = await this.cartBadge.getText();
        const actualCount = parseInt(badgeText, 10);
        await expect(actualCount).toBe(this.itemsMainInvPage.length);
        console.log(`Cart has ${actualCount} items`);
        await this.cartBtn.click();

        await this.checkoutBtn.click();
        //assertion: returns to inventory page
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    }
    async checkItemLinksTest(){
        //arrange and act: login, add items, go to cart, open each item's page from cart
        await LoginPage.getStarted();
        for (const item of this.itemsMainInvPage) {
            await item.click();
        }
        const badgeText = await this.cartBadge.getText();
        const actualCount = parseInt(badgeText, 10);
        await expect(actualCount).toBe(this.itemsMainInvPage.length);
        console.log(`Cart has ${actualCount} items`);
        await this.cartBtn.click();

        for (const itemLink of this.cartItemLinks) {
            const itemID = await itemLink.getAttribute('id');
            await itemLink.click();
            //assertion: URL contains item's id
            const urlItemId = new URL(await browser.getUrl()).searchParams.get('id');
            await expect(itemID).toContain(urlItemId);
            //go back to cart page
            await this.cartBtn.click();
        }
    }
}

export default new InventoryPage();
