var loginUtil = require('../utils/common/loginUtil');
var commonUtil = require('../utils/common/commonUtil');
module.exports = {
    'before': function(browser) {
        loginUtil.login(browser);
    },
    'after': function(browser) {
        //browser.end();
    },
    '上传场景': (browser) => {
        var sceneUrl = browser.globals.sceneBaseUrl;
        browser
            .waitForElementVisible('#msg')
            .click('#msg')
        commonUtil.clickByText(browser, 'li', '我的资源')
            .moveToElement('.add', 10, 10)
        commonUtil.clickByText(browser, 'label', '上传场景')
            .setValue('#file', sceneUrl + '建筑工地.zip')
            .click('#supload')
    }
}