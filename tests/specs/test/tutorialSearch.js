var loginUtil = require('../utils/common/loginUtil');
var commonUtil = require('../utils/common/commonUtil');
var searchText = 'input[type="text"]';
var tabActiveSelector = '.nav-link.active';
var titleSelector = '.ecdoc-api-doc-group-title';
var searchResult = '.query-result-info';
var res1 = '共 1 条结果';
var targetResult = '.dtui-treelist-text.dtui-treelist-text-highlight';
module.exports = {
    'before': function(browser) {
        loginUtil.login(browser);
    },
    'after': function(browser) {
        browser.end();
    },
    '教程，教程搜索': (browser) => {
        commonUtil.switchTab(browser, 'a', '文档', titleSelector, tabActiveSelector, '教程');
        browser.getAttribute(searchText, 'placeholder', function(res) {
            this.assert.equal(res.value, "教程名称搜索（快捷键'/'）");
        })
    },
    '教程搜索App关键字,按回车键': (browser) => {
        browser
            .setValue(searchText, ['App', browser.Keys.ENTER])
            .assert.elementPresent(searchResult)
            .getText(searchResult, function(res) {
                this.assert.equal(res.value, res1);
            })
            .assert.containsText(targetResult, 'App')
    },
    '切换到全文搜索，检查搜索结果': (browser) => {
        commonUtil.clickByText(browser, 'span', '全文搜索')
            .expect.element(searchResult).text.to.not.equal(res1)
        browser
            .execute(function(selector) {
                return document.getElementsByClassName(selector).length
            }, ['dtui-treelist-text dtui-treelist-text-highlight'], function(res) {
                var temp = res.value > 3;
                this.assert.equal(temp, true);
            })
    }
}