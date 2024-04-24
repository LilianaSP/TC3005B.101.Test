var assert = require('assert');
const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

describe ('Log in', function(){
    it('log in', async function(){
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('https://www.saucedemo.com/')
        await driver.findElement(By.id('user-name')).sendKeys('standard_user', Key.RETURN) 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce', Key.RETURN) 
        await driver.findElement(By.id('login-button')).click()
        await driver.findElement(By.id('add-to-cart-sauce-labs-backpack'))
        driver.close()
        })
    })

describe ('Adding to shoping cart', function(){
    this.timeout(10000);
    it('shoping cart', async function(){
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('https://www.saucedemo.com/')
        await driver.findElement(By.id('user-name')).sendKeys('standard_user', Key.RETURN) 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce', Key.RETURN) 
        await driver.findElement(By.id('login-button')).click()
        await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click()
        await driver.findElement(By.id('add-to-cart-sauce-labs-bike-light')).click()
        await driver.findElement(By.id('add-to-cart-sauce-labs-bolt-t-shirt')).click()
        await driver.findElement(By.id('shopping_cart_container')).click()
        await driver.findElement(By.id('checkout')).click()

        await driver.findElement(By.id('first-name')).sendKeys('Liliana') 
        await driver.findElement(By.id('last-name')).sendKeys('Solórzano') 
        await driver.findElement(By.id('postal-code')).sendKeys('45019') 
        await driver.findElement(By.id('continue')).click()

        // localizing variables to obtain their price
        let item1 = await driver.findElement(By.xpath('//*[@id="checkout_summary_container"]/div/div[1]/div[3]/div[2]/div[2]/div/text()[2]'))
        let item2 = await driver.findElement(By.xpath('//*[@id="checkout_summary_container"]/div/div[1]/div[4]/div[2]/div[2]/div/text()[2]'))
        let item3 = await driver.findElement(By.xpath('//*[@id="checkout_summary_container"]/div/div[1]/div[5]/div[2]/div[2]/div/text()[2]'))
        let item1Text = await item1Element.getText();
        let item2Text = await item2Element.getText();
        console.log(item1Text)
        
        driver.close()
        }) 
    })