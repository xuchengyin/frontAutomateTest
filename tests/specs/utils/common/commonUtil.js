module.exports = {
    'switchTab': function(browser, image, tabName, assertSelector, ActiveSelector) {
        if (tabName == '使用教程') {
            return browser
                .useXpath()
                .clickElement("//" + image + "[text()=" + "'" + tabName + "'" + "]")
                .useCss()
                .frame('ifr_tutorial')
                .waitForElementPresent(assertSelector)
                .frameParent()
                .assert.containsText(ActiveSelector, tabName)
                .frame('ifr_tutorial')
        } else {
            return browser
                .useXpath()
                .click("//" + image + "[text()=" + "'" + tabName + "'" + "]")
                .pause(500)
                .useCss()
                .waitForElementPresent(assertSelector)
                .assert.containsText(ActiveSelector, tabName)
        }

    }
}