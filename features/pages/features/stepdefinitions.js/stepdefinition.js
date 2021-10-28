var propertiesReader = require('properties-reader');
var or = propertiesReader('or.properties');


var{Given,When,Then,After}=require('cucumber');
const { browser, element } = require('protractor');
var {expect}=require('chai');
var EC = browser.ExpectedConditions;



After(function(scenarioResult){
  let self=this;
  if(scenarioResult.result.status==='FAILED'){
  return browser.takeScreenshot()
  .then(function(screenshort){
    const decodedImage=new Buffer(screenshort.replace(/^data:image\/png;base64,/,''),'base64');
      self.attach(decodedImage, 'image/png');  
      console.log("scenarioresult = ",scenarioResult.result.status)

  });
}
});
var base=require('features/pages/pages/basepage.js')
When('user navigate to {string}',async function (url) {
  await base.go(url)
  await browser.manage().window().maximize();
});
When('user found the title as',async function () {
  await browser.getTitle().then(function(title){  

    expect(title).to.include("Protractor practice website - Banking App");
   })
});
When('user click on CustomerLogin button',async function () {
  await browser.element(by.xpath(or.get('custLoginButton_css'))).click();
  await browser.sleep(3000);
});
When('user select the value from the list',async function () {
  await browser.element(by.model(or.get('custid_model'))).$(or.get('namedropdown_css')).click();
  await browser.sleep(3000);
});
Then('user click on Login',async function () {
 
  await browser.element(by.xpath('/html/body/div[3]/div/div[2]/div/form/button')).click;
 
  await browser.wait(EC.visibilityOf(element(by.id('userSelect'))), 100000);
         
  await browser.wait(EC.invisibilityOf(element(by.xpath('//button[text()="Customer Login"]'))), 100000);
  
});

