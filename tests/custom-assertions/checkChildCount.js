exports.assertion = function(className, tagName, count) {
    //目前该方法断言父元素下的子元素的个数
    this.message = 'Testing if element <' + className + '> has count: ' + count
    this.expected = count
    this.pass = function(val) {
        return val == this.expected
    }
    this.value = function(res) {
        return res.value
    }
    this.command = function(cb) {
        var self = this
        return this.api.execute(function(className, tagName) {
            return document.getElementsByClassName(className)[0].getElementsByTagName(tagName).length
        }, [className, tagName], function(res) {
            cb.call(self, res)
        })
    }
}