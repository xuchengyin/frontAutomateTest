var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    //openBrowser: true,
    reportsDirectory: __dirname + '/reports',
    uniqueFilename: true,
    reportFilename: "TestResult.html",
    themeName: "default",
    openBrowser: false
});
module.exports = {
    reporter: reporter.fn,
    waitForConditionTimeout: 20000,
    abortOnAssertionFailure: false,
    asyncHookTimeout: 1000,
    inputSelector: 'input[type=text]',
    searchSelector: 'input[type=text]',
    searchPlaceholder: 'input[placeholder="搜索"]',
    uploadFileInput: 'input[type="file"]',
    btnOK: '.btn.uDialog-btn-ok',
    btnCancel: '.btn.uDialog-btn-cancel',
    modalTitle: '.modal-title',
    windNotice: '.windows-notice p',
    sceneBaseUrl: 'D:/ThingE2E/tests/specs/testData/'
}