import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should not login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'wrong_pass')
         await expect(SecurePage.errorMessage).toBeExisting()
         await expect(SecurePage.errorMessage).toHaveText(
             expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
    
    })
})

