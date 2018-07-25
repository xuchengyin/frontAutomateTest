var loginUtil = require('../utils/common/loginUtil')
var loginPanel = '#login_container';
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
                this.assert.equal(res.value, '查看示例');
            })
    },
    '检查导航栏': (browser) => {
        var arr = ['首页', 'DEMO示例', '使用教程', '场景搭建', '模型库', '价格', '在线开发', '常见问题', '登录']
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
    '点击查看查看示例，跳转到demo页面': (browser) => {
        browser
            .clickElement('.btn-round-link.btn.btn-primary.btn-lg')
            .assert.containsText('.nav-link.active', 'DEMO示例')
            .assert.elementPresent('.card-box-parent')
    }
}