var os = require('os')

module.exports = (function(settings) {
    settings.test_workers = false;
    // if (os.platform().indexOf('win') == 0) {
    //     //settings.test_settings.default.desiredCapabilities = settings.test_settings.chrome.desiredCapabilities;
    //     settings.test_settings.default.desiredCapabilities = settings.test_settings.phantomjs.desiredCapabilities;
    //     settings.selenium.start_process = true;
    //     settings.selenium.cli_args['webdriver.chrome.driver'] = "./bin/2.37/chromedriver.exe";
    //     settings.test_settings.default.selenium_host = "localhost";
    //     settings.test_settings.default.launch_url = "http://www.thingjs.com";
    // } else {
    //     settings.test_settings.default.launch_url = "http://www.thingjs.com";
    // }
    settings.test_workers = false;
    let broswers = os.platform() === 'win' ? settings.test_settings.chrome : settings.test_settings.phantomjs;
    settings.test_settings.default.desiredCapabilities = settings.test_settings.chrome.desiredCapabilities;
    settings.test_settings.default.launch_url = os.platform() === 'win' ? 'http://localhost:8080' : 'http://www.thingjs.com';
    settings.selenium.start_process = os.platform() === 'win';
    settings.test_settings.default.selenium_host = os.platform() === 'win' ? '127.0.0.1' : '47.93.212.144';
    return settings;
})(require('./nightwatch.json'));