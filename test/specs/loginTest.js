import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open()
        // await LoginPage.login('standard_user', 'secret_sauce')
       // await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
       LoginPage.getStarted();
    
    })
}) 
