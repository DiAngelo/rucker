require 'compass/import-once/activate'

preferred_syntax = 	:scss
http_path = 		'/'
css_dir =  			'themes/dxr/css'
sass_dir = 			'themes/dxr/sass'
images_dir = 		'themes/dxr/img'
javascripts_dir = 	'themes/dxr/scripts'
relative_assets = 	true
line_comments = 	true
output_style = 		(environment == :production) ? :compressed : :expanded
