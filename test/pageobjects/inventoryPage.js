import { $ } from '@wdio/globals'
import LoginPage from './loginPage.js'
import Page from './page.js';


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
	    return $('#remove-test.allthethings()-t-shirt-(red)')
    }
    
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

    


}

export default new InventoryPage();
