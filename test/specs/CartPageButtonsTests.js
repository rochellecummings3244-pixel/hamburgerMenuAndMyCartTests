import { expect } from '@wdio/globals'
import InventoryPage from '../pageobjects/inventoryPage.js'

describe('Buttons on the cart page redirect or work as intended', () => {
    it('should redirect to the full inventory page', async () => {
        await InventoryPage.returnShoppingTest()
    })
})
