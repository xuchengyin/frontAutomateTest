/**
 * 获取元素的text， 把元素的文本传递给全局变量
 * @param {*} selector
 * author：wsl
 */
exports.command = function (selector) {
  var self = this;
  var globals = self.globals;
  if (!globals.elementText) {
    globals.elementText = '';
  }
  self.getText(selector, function (result) {
    if (result.status !== -1) {
      self.globals.elementText = result.value;
    }
  });
  return self;
};
