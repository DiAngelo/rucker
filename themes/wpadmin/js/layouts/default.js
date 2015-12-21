define(["com/header.base"], function (rkrHeader) {
    var rkrLayout = function(content) {
        var header = m("header", rkrHeader());
        var main   = m("main", content); 
        var layout = m(".rkrLayout", [header, main]);
        return layout;
    };
    
    return rkrLayout;
});
