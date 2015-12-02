//
// Rucker Simple Menu component
//

define(function () {
  var comMenuSimple = {};
  
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
    })
    
    return m("ul.menu_list", menuList);
  };
  
  return comMenuSimple;
});
