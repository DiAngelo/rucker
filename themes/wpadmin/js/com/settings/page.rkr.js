log.debug(rkrConf.layout);

define(['layouts/' + rkrConf.layout, 'com/admin/settings.rkr'], function(rkrLayout, rkrSettings) {
    var comSettingsPage = {};
    
    comSettingsPage.controller = function(args) {
        this.greeting = args.title;
        this.options = args.options;
    };
    
    comSettingsPage.view = function(ctrl) {
        var pageContent = [
            m("h3.settings", ctrl.greeting),
            m.component(rkrSettings, {options: ctrl.options})
        ];

        return m.component(rkrLayout, {branding: rkrConf.branding, content: pageContent});
    };

    return comSettingsPage;
});
