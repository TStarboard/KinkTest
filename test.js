const { Builder, By, Key, until, length } = require('selenium-webdriver');
const assert = require('assert');

describe('Login Failure Test', function() {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('Kink login failure', async function() {
    await driver.get('https://www.kink.com/');
    await driver.findElement(By.css('.everything:nth-child(1)')).click();
    await driver.findElement(By.id('kBarLogin')).click();
    await driver.findElement(By.id('usernameLoginPopup')).sendKeys('email@fake.com');
    await driver.findElement(By.id('passwordLoginPopup')).sendKeys('fakepassword');
    await driver.findElement(By.id('loginFromPopup')).click();

    //Unable to find element for error message "Bad username or password" 
      await driver.findElement(By.css('.error-message')).then(function(result){
      assert(result.length === 1);
    });
   
  });
})
