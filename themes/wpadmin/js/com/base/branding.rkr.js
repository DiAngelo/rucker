//
// Rucker Branding component
//
define(function () {
  var comBranding = {};
  
  comBranding.controller = function (args) {
    this.title = args.title;
    this.motto = args.motto;
  }
  
  comBranding.view = function (ctrl) {
    return m('.branding', [
      m('h1', ctrl.title),
      m('small', ctrl.motto)
    ]);
  }
  
  return comBranding;
});
