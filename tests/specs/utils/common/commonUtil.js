module.exports = {
    /**
     * @method 根据text定位元素
     * @param {object} browser 浏览器对象
     * @param {string} tag xpath tag名称
     * @param {string} tabNmae tab名称
     * @param {string} assertSelector 等待出现的元素
     * @param {string} ActiveSelector 需要验证的高亮元素
     * @return {object} browser 对象
     */
    'switchTab': function(browser, tag, tabName, assertSelector, ActiveSelector, tutorialItem = null) {
        if (tabName == '文档') {
            browser
                .useXpath()
                .clickElement("//" + tag + "[text()=" + "'" + tabName + "'" + "]")
                .pause(1000)
            if (tutorialItem != null) {
                browser.clickElement("//" + tag + "[text()=" + "'" + tutorialItem + "'" + "]");
            }
            browser.useCss()
                .frame('ifr_tutorial')
                .waitForElementPresent(assertSelector)
                .frameParent()
                .assert.containsText(ActiveSelector, tabName)
                .frame('ifr_tutorial')
        } else {
            browser
                .useXpath()
                .click("//" + tag + "[text()=" + "'" + tabName + "'" + "]")
                .pause(500)
                .useCss()
                .waitForElementPresent(assertSelector)
                .assert.containsText(ActiveSelector, tabName)
        }
        return browser;
    },
    /**
     * @method 通过text定位元素
     * @param {object}browser 浏览器对象
     * @param {string}tag tag标签
     * @param {string}text 需定位的text
     */
    'clickByText': function(browser, tag, text) {
        return browser
            .useXpath()
            .clickElement("//" + tag + "[text()=" + "'" + text + "'" + "]")
            .useCss()
    },
    'moveToElementByXpath': function(browser, tag, text, x, y) {
        return browser
            .useXpath()
            .moveToElement("//" + tag + "[text()=" + "'" + text + "'" + "]", x, y)
            .useCss()
    }
}