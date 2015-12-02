//
// Rucker Simple Menu component
//

define(function () {
  var comMenuSimple = {};
  var classBase = '.mMainMenu';

  function classBEM (name, isElement) {
    var separator = '-';

    isElement = _.isUndefined(isElement) ? true : isElement;

    if (isElement) {
      separator = '_';
    }
  
    return classBase + separator + name;
  }
  
  comMenuSimple.controller = function (args) {
    this.items = args.items;
  };

  comMenuSimple.view = function (ctrl) {
    var menuList = [];
    
    _.each(ctrl.items, function (itemName, itemKey) {
      var itemClass = '.menu_item';
      var itemRoute = itemKey;
      
      if (itemRoute === m.route()) {
        itemClass += ".isActive";
      }
      
      menuList.push(m("li" + itemClass, [
        m("a[href='" + itemRoute + "']", {config: m.route}, itemName)
      ]));
    });
    

    var idBox = "MainMenuSwitch";
    var mNav = m("nav" + classBEM("nav") + ".lDisplay-no@xs.lDisplay-no@sm.uPd-vXl@sm.uPos-full@xs.uPos-full@sm", [
      m("ul" + classBEM("list"), menuList)
    ]);

    return m(classBase, [
      m("input[type=checkbox]#" + idBox + classBEM("switch") + ".lDisplay-no"),
      m(classBEM("container"), [
        m("label[for=" + idBox + "]" + classBEM("sandwich") + ".lDisplay-no.lDisplay-ib@xs.lDisplay-ib@sm", [
          m("i.iSandwich-sm")
        ]),
        mNav
      ])
    ]);
  };
  
  return comMenuSimple;
});
