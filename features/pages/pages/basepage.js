const { browser } = require("protractor")

module.exports = {
    go:function(url){
        browser.get(url);
    }
}