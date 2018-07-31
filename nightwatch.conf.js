var os = require('os')

module.exports = (function(settings) {
    settings.test_workers = false;
    if (os.platform().indexOf('win') == 0) {
        settings.test_settings.default.desiredCapabilities = settings.test_settings.chrome.desiredCapabilities;
        settings.selenium.start_process = true;
        settings.selenium.cli_args['webdriver.chrome.driver'] = "./bin/2.37/chromedriver.exe";
        settings.test_settings.default.selenium_host = "localhost";
        settings.test_settings.default.launch_url = "http://www.thingjs.com";
    } else {
        settings.test_settings.default.launch_url = "http://www.thingjs.com";
    }
    return settings;
})(require('./nightwatch.json'));