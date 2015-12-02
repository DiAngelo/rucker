//
// Rucker Base content component
//
define(function () {
  var comBaseContent = {};
  
  comBaseContent.controller = function (args) {
    this.content = args.content;
  };
  
  comBaseContent.view = function (ctrl) {
    return m('main', ctrl.content);
  };
  
  return comBaseContent;
});
