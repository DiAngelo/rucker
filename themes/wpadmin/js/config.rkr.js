//
// Rucker Admin config file
//

define({
    prefix:                 "rkr",

    branding:               {
      title:                "Rucker",
      motto:                "WP theme that rocks!",
    },
    
    classContainer:         "js-rkr-options",
    layout:                 "settings-sidemenu",
    
    routeBaseParam:         "",//"page=rkr-options",
    routes:                 {
      general:            "General",
      home:               "Homepage"
    },
    defaultRoute:           "general",

    options:                {
      general:              {
        title:              {
          des:              "Descriere",
          name:             "Titlu",
          type:             "text"
        }
      },
      home:                 {
        title:              {
          des:              "Descriere home",
          name:             "Titlu",
          type:             "text"
        }
      }
    }
});
