import { expect } from '@wdio/globals'
import InventoryPage from '../pageobjects/inventoryPage.js'

describe('Adding to and Removing from the Cart', () => {
    it('should add all items to and remove them from the cart correctly', async () => {
        await InventoryPage.addRemoveCartCheck()
    })
    it('should go to cart checkout page correctly', async () => {
        await InventoryPage.checkoutTest()
    })
})

