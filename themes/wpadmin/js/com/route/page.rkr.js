define(["com/settings/page.rkr"], function(rkrSettingsPage) {
  return function (name) {
    var comPageRoute = {};

    comPageRoute.controller = function(args) {
      this.args = {
        route: name,
        title: rkrConf.routes[name],
        options: rkrConf.options[name]
      };
    };

    comPageRoute.view = function(ctrl) {
      return m.component(rkrSettingsPage, ctrl.args);
    };
  
    return comPageRoute;
  };
});
