module.exports = {
    login: function(browser) {
        browser
            .url(browser.launchUrl)
            .maximizeWindow()
            .waitForElementVisible('#login')
            .click('#login')
            .setValue('#username', '1234567test')
            .setValue('#password', '123456')
            .click('#login-btn')
    }

}