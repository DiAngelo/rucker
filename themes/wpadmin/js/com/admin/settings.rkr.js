define(["com/settings/text.rkr"], function(rkrText) {
  var comAdminSettings = {}
  
  comAdminSettings.controller = function() {
    if (arguments.length > 0) {
      this.options = arguments[0].options;
    }
  }
  
  comAdminSettings.view = function(ctrl) {
    var pageSettings = [];
    
    _.each(ctrl.options, function (option, key) {
      switch (option.type) {
        case "text": {
          pageSettings.push(m.component(rkrText, {id: key, option: option}));
          break;
        }
        default: {
          pageSettings.push(m("span", "---"));
          break;
        }
      }
    });
      return m(".options", pageSettings);
  }

  return comAdminSettings;
});
