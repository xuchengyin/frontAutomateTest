var loginUtil = require('../utils/common/loginUtil');
var commonUtil = require('../utils/common/commonUtil');
var loginPanel = '#login_container';
var menu1 = 'li.nav-menu.solution > ul';
var menu2 = '#sub-site-nav > li:nth-child(3) > ul';
var menu3 = '#sub-site-nav > li:nth-child(5) > ul';
var itemActiveSelector = '.toc-link.node-name--H5.is-active-link';
var searchTitle = '.dtui-chkbtn-i.dtui-chkbtn-i-active';
module.exports = {
    'before': function(browser) {
        loginUtil.login(browser);
    },
    'after': function(browser) {
        browser.end();
    },
    '检查默认tab': (browser) => {
        browser
            .pause(2000)
            .assert.containsText('.nav-link.active', '首页')
    },
    '检查首页内容': (browser) => {
        browser
            .assert.title('ThingJS - JavaScript 3D Library')
            .getText('.h1', function(res) {
                this.assert.equal(res.value, 'ThingJS');
            })
            .getText('div.banner-text-wrapper > h1', function(res) {
                this.assert.equal(res.value, '让三维开发变简单');
            })
            .getText('.btn-round-link.btn.btn-primary.btn-lg', function(res) {
                this.assert.equal(res.value, '查看案例');
            })
    },
    '检查导航栏': (browser) => {
        var arr = ['首页', 'Demo示例', '文档', '价格', '工具', '在线开发', '论坛', '登录']
        for (var i = 0; i < arr.length; i++) {
            browser.assert.containsText(".collapse.navbar-collapse", arr[i]);
        }
    },
    '点击登录按钮，出现二维码': (browser) => {
        browser
            .clickElement('#login')
            .assert.attributeEquals(loginPanel, 'style', 'display: block;')
    },
    '再次点击登录按钮，二维码消失': (browser) => {
        browser
            .clickElement('#login')
            .assert.attributeEquals(loginPanel, 'style', 'display: none;')
    },
    '点击查看案例，跳转到demo页面': (browser) => {
        browser
            .clickElement('.btn-round-link.btn.btn-primary.btn-lg')
            .assert.containsText('.nav-link.active', 'Demo示例')
            .assert.elementPresent('.card-box-parent')
    },
    '检查Demo示例tab的下拉菜单': (browser) => {
        var arr = ['仓储管理', '建筑导览', '安防监控', '资产管理', '数据中心']
        commonUtil.moveToElementByXpath(browser, 'a', 'Demo示例', 5, 5)
            .pause(2000)
        for (var i = 0; i < arr.length; i++) {
            browser.assert.containsText(menu1, arr[i]);
        }
        browser
            .click("#sub-site-nav > li.nav-menu.solution > ul > li:nth-child(3)")
            .assert.containsText(itemActiveSelector, '安防监控')

    },
    '检查文档tab下拉菜单': (browser) => {
        var arr = ['教程', 'API', '常见问题']
        commonUtil.moveToElementByXpath(browser, 'a', '文档', 5, 5)
            .pause(2000)
        for (var i = 0; i < arr.length; i++) {
            browser.assert.containsText(menu2, arr[i]);
        }
        browser
            .click('#sub-site-nav > li:nth-child(3) > ul > li:nth-child(1)')
            .waitForElementPresent('#ifr_tutorial')
            .pause(2000)
            .frame('ifr_tutorial')
            .assert.containsText(searchTitle, '教程搜索')
            .frameParent()
            .pause(1000)
        commonUtil.moveToElementByXpath(browser, 'a', '文档', 5, 5)
            .click('#sub-site-nav > li:nth-child(3) > ul > li:nth-child(2)')
            .waitForElementPresent('#ifr')
            .frame('ifr')
            .assert.containsText(searchTitle, 'API搜索')
            .frameParent()
        commonUtil.moveToElementByXpath(browser, 'a', '文档', 5, 5)
            .click('#sub-site-nav > li:nth-child(3) > ul > li:nth-child(3)')
            .waitForElementPresent('#content')
    },
    '检查工具tab下拉菜单': (browser) => {
        var arr = ['模型库', '园区搭建工具']
        commonUtil.moveToElementByXpath(browser, 'a', '工具', 5, 5)
        for (var i = 0; i < arr.length; i++) {
            browser.assert.containsText(menu3, arr[i]);
        }
        browser
            .click('#sub-site-nav > li:nth-child(5) > ul > li:nth-child(1) > a')
            .pause(2000)
            .assert.elementPresent('.model-search-main')
        commonUtil.moveToElementByXpath(browser, 'a', '工具', 5, 5)
            .pause(2000)
            .click('#sub-site-nav > li:nth-child(5) > ul > li:nth-child(2) > a')
            .pause(2000)
            .assert.elementPresent('#scene_upload')
    }

}