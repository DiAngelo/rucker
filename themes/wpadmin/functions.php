<?php
/**
 * Rucker Admin
 */

add_action('admin_menu', 'rkrAdminMenu');

function rkrAdminMenu() {
    add_theme_page( "Rucker", "Rucker", "edit_theme_options", "rkr-options", "rkrAdminPage" );
}



function rkrAdminPage() {
    wp_enqueue_script( 'loglevel',  'https://cdnjs.cloudflare.com/ajax/libs/loglevel/1.4.0/loglevel.min.js');
    wp_enqueue_script( 'lodash',    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js');
    wp_enqueue_script( 'mithril',   'https://cdnjs.cloudflare.com/ajax/libs/mithril/0.2.0/mithril.js');
    wp_enqueue_script( 'requirejs', 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.20/require.js');
    // wp_enqueue_script( 'rkrAdminHeader', get_template_directory_uri() . '/rkrAdmin/js/layout/rkrHeader.js', array(), '1.0.0', true );
    // wp_enqueue_script( 'rkrAdmin', get_template_directory_uri() . '/rkrAdmin/js/rkrAdmin.js', array(), '1.0.0', true );
    
    wp_enqueue_style('rkr', get_template_directory_uri() . '/css/theme.css');
    
    $app_base = get_template_directory_uri() . '/rkrAdmin/js/';
    wp_localize_script( 'requirejs', 'require', array(
        'baseUrl' => $app_base,
        'deps'    => array( $app_base . '/index.js')
    ));
        
    echo '<div class="js-rkr-options">Loading theme admin panel ...</div>';
}


add_action( 'wp_ajax_rkr_conf', 'rkr_conf' );

function rkr_conf() {
    $response = [
        "branding" => [
            "title" => "Rucker",
            "motto" => "WP theme that rocks !"
        ],
        
        "classContainer" => "js-rkr-options",
        "layout" => "settings-sidemenu",
        
        "routeBaseParam" => "page=rkr-options",
        "routes" => [
            "general" => "General",
            "home" => "Homepage"
        ],
        "options" => [
            "general" => [
                "title" => [
                    "id"   => "t1",
                    "type" => "text",
                    "name" => "Titlul campului",
                    "desc" => "Descrirea"
                ]
            ],
            "home" => [
                "title" => [
                    "id"   => "t1",
                    "type" => "text",
                    "name" => "Titlul campului",
                    "desc" => "Descrirea home"
                ]
            ]
        ],
        "defaultRoute" => "general"
    ];
    
    die(json_encode($response));
}