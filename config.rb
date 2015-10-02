require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass


preferred_syntax = 	:scss
http_path = 		'/'
css_dir =  			'themes/admin/css'
sass_dir = 			'themes/admin/sass'
images_dir = 		'themes/admin/img'
javascripts_dir = 	'themes/admin/scripts'
relative_assets = 	true
line_comments = 	true
output_style = 		(environment == :production) ? :compressed : :expanded
