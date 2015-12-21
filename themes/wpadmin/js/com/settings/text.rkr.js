define(["com/base/setting.rkr"], function(rkrSetting) {
  var comSettingsText = {}
  
  comSettingsText.controller = function() {
    if (arguments.length > 0) {
      this.option = arguments[0].option;
      this.option.id = arguments[0].id;
    }
  }
  
  comSettingsText.view = function(ctrl) {
    return m(".cccc", m.component(rkrSetting, ctrl.option));
  }

  return comSettingsText;
});
