//
// Rucker Admin bootstrap file
//

log.enableAll();

var rkrConf = {};

function pageReady () {
  require(["com/route/page.rkr"], function (rkrRoutePage) {
    var rkrContainer = document.getElementsByClassName(rkrConf.classContainer)[0];
    var rkrRoutes = {};
    var rkrRoute = (rkrConf.routeBaseParam != "") ? rkrConf.routeBaseParam + "&/" + rkrConf.defaultRoute : rkrConf.defaultRoute;
        
    _.each(rkrConf.routes, function (title, route) {
       rkrRoutes[route] = rkrRoutePage(route);
    });
        
    log.debug("Available routes:");
    log.debug(rkrRoutes);
    log.debug("Default route:" + rkrRoute);
        
    m.route(rkrContainer, rkrRoute, rkrRoutes);
    
    var oldClass = document.body.className;
    document.body.className = oldClass + " is-loaded";
  });
}

(function ( $ ) {
  $( document ).ready( function () {
    // $.post( ajaxurl, {
    //   action: 'rkr_conf',
    //   data: 'test'
    // }, function (response) {
    //   rkrConf = JSON.parse(response);
      
    //   log.debug("rkrConf");
    //   log.debug(rkrConf);
      
    require(["config.rkr"], function (config) {
      rkrConf = config;

      log.debug("rkrConf");
      log.debug(rkrConf);

      pageReady();
    });
    // } );
  });
})( jQuery );
