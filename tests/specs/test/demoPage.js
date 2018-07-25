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
        commonUtil.switchTab(browser, 'a', 'DEMO示例', '#_仓储管理', tabActiveSelector)
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
        commonUtil.switchTab(browser, 'a', '建筑导览', '#_建筑导览', itemActiveSelector)
        commonUtil.switchTab(browser, 'a', '安防监控', '#_安防监控', itemActiveSelector)
        commonUtil.switchTab(browser, 'a', '资产管理', '#_资产管理', itemActiveSelector)
        commonUtil.switchTab(browser, 'a', '数据中心', '#_数据中心', itemActiveSelector)
    }
}