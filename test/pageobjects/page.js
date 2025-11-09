import { browser } from '@wdio/globals'
    // Arrange
    // Act
    // Assert

    // Given
    // When
    // Then
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
         
    open () {
        return browser.url("https://www.saucedemo.com/")
    }
    
}
