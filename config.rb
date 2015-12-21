require 'compass/import-once/activate'

preferred_syntax = 	:scss
http_path = 		'/'
css_dir =  			'themes/wpadmin/css'
sass_dir = 			'themes/wpadmin/sass'
images_dir = 		'themes/wpadmin/img'
javascripts_dir = 	'themes/wpadminwpadmin/scripts'
relative_assets = 	true
line_comments = 	true
output_style = 		(environment == :production) ? :compressed : :expanded
