var loginUtil = require('../utils/common/loginUtil')
var commonUtil = require('../utils/common/commonUtil')
var itemActiveSelector = '.toc-link.node-name--H5.is-active-link';
var tabActiveSelector = '.nav-link.active';
module.exports = {
    'before': function(browser) {
        loginUtil.login(browser);
    },
    'after': function(browser) {
        browser.end();
    },
    '@disabled': false,
    '切换到demo页面': (browser) => {
        commonUtil.switchTab(browser, 'a', '解决方案', '#_仓储管理', tabActiveSelector)
            .assert.containsText(itemActiveSelector, '仓储管理')
    },
    '检查demo面板': (browser) => {
        browser
            .moveToElement('.card-img.col-md-7.col-sm-7.col-xs-12.text-center', 150, 150)
            .pause(2000)
            .assert.containsText('.btn-p.left.look', '预览')
            .assert.containsText('.btn-p.right.codelook', '代码查看')
    },
    '切换item': (browser) => {
        var arr = ['建筑导览', '安防监控', '资产管理', '数据中心']
        for (var i = 0; i < arr.length; i++) {
            browser
                .click("#content > div > div.toc > ul > li:nth-child(" + (i + 2) + "")
                .assert.containsText(itemActiveSelector, arr[i])
        }

    }
}