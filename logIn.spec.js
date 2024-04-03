// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('LogIn', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('LogIn', async function() {
    await driver.get("https://bstackdemo.com/")
    await driver.manage().window().setRect({ width: 1050, height: 724 })
    await driver.findElement(By.id("signin")).click()
    await driver.findElement(By.id("react-select-2-input")).sendKeys("demouser")
    await driver.findElement(By.id("react-select-2-input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".css-1pahdxg-control > .css-1hwfws3")).click()
    await driver.findElement(By.id("react-select-3-input")).sendKeys("testingisfun99")
    await driver.findElement(By.id("react-select-3-input")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("login-btn")).click()
  })
})
