// Test item page functionalities
// individually, having added the item to cart and not added to cart

describe('Item Page Test', () => {
    
    it('Open Item page', async()=> {
        await ItemPage.openItemPage();
        
    })
    it('Item is added to cart', async()=> {
        await ItemPage.addItemToCart();
        
    })
    it('Item is removed from cart', async()=> {
        await ItemPage.removeItemFromCart();
        
    })
})