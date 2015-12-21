//
// Rucker Sidebar component
//

define(['com/base/branding.rkr', 'com/base/menu-simple.rkr'], function (rkrBranding, rkrMenuSimple) {
  var comBaseSidebar = {};
  
  comBaseSidebar.controller = function (args) {
    this.branding = args.branding;
    this.items = args.items;
  };

  comBaseSidebar.view = function (ctrl) {
    var sidebarContent = [];
    
    if (!_.isUndefined(ctrl.branding)) {
      sidebarContent.push(m.component(rkrBranding, ctrl.branding));
    }

    if (!_.isUndefined(ctrl.items) && _.keys(ctrl.items).length > 0) {
      sidebarContent.push(m.component(rkrMenuSimple, {items: ctrl.items}));
    }
    
    return m(".rkrSidebar", sidebarContent);
  };
  
  return comBaseSidebar;
});
