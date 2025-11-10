import { $ } from '@wdio/globals'
import Page from "./page";

class ItemPage extends Page {
    //Image selectors to go to individual item page, and the add/remove buttons on those pages
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
}