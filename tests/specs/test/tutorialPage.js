var loginUtil = require('../utils/common/loginUtil')
var commonUtil = require('../utils/common/commonUtil')
var tabActiveSelector = '.nav-link.active';
var titleSelector = '.ecdoc-api-doc-group-title';
var itemActiveSelector = '.dtui-treelist-text dtui-treelist-text-active';
var temp = 'div.ecdoc-api-tree.dtui-cpt.dtui-treelist > ul > li:nth-child(1)'
module.exports = {
    'before': function(browser) {
        loginUtil.login(browser);
    },
    'after': function(browser) {
        browser.end();
    },
    '切换到使用教程页面': (browser) => {
        commonUtil.switchTab(browser, 'a', '文档', titleSelector, tabActiveSelector, '教程');
    },
    '切换左侧教程菜单,切换正确': (browser) => {
        var arr = ['概述', '开发方式', '项目集成', 'App对象', '物体', '查询', '事件', '摄像机', '界面', '面板库', '控件', '代码片段', '常见问题']
        for (var i = 0; i < arr.length; i++) {
            commonUtil.switchTab(browser, 'span', arr[i], titleSelector, titleSelector);
        }
    }
}