//
// Side menu settings layout
//

//
// Sidebar      |
//  - Branding  | Content
//  - Menu      |
//

define(["com/settings/sidebar.rkr", "com/base/content.rkr"], function (rkrBaseSidebar, rkrBaseContent) {
  var layoutSettingsSideMenu = {};
  
  layoutSettingsSideMenu.controller = function (args) {
    this.content = args.content;
    this.branding = args.branding;
  };

  layoutSettingsSideMenu.view = function (ctrl) {
    return m(".lContainer.oInline_list@mdUp", [
      m(".oInline@mdUp.lSz-1/4@mdUp", [
        m.component(rkrBaseSidebar, {branding: ctrl.branding, items: rkrConf.routes})
      ]),
      m(".oInline@mdUp.lSz-3/4@mdUp", [
        m.component(rkrBaseContent, {content:  ctrl.content})
      ])
    ]);
  };
  
  return layoutSettingsSideMenu;
});
