exports.command = function clickElement(element, cb) {

    return this.waitForElementPresent(element)
        .pause(200)
        .click(element)
        .pause(3000)

}