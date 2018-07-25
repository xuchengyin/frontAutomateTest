module.exports = {
    login: function(browser) {
        browser
            .url(browser.launchUrl)
            .maximizeWindow()
            .waitForElementVisible('#login')
    }

}