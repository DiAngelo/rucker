define(function() {
  var comBaseSetting = {}
  
  comBaseSetting.controller = function() {
    if (arguments.length > 0) {      
      this.id = arguments[0].id;
      this.name = arguments[0].name;
      this.description = arguments[0].desc;
      this.value = 'value';
    }
  }
  
  comBaseSetting.view = function(ctrl) {
    return m('.setting', [
      m('span.oInline', [
        m('label.setting_name', ctrl.name, {for: ctrl.id}),
        m('small.setting_desc', ctrl.description)
      ]),
      m('span.oInline', ctrl.value)
    ]);
  }

  return comBaseSetting;
});
