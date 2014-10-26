# Require any additional compass plugins here.
require "susy"


# Set this to the root of your project when deployed:
http_path       = "/"
css_dir         = "css"
sass_dir        = "sass"
fonts_dir       = "fonts"
images_dir      = "images"
javascripts_dir = "js"

output_style    = :compressed
line_comments   = false
sass_options    = {:debug_info => false}


# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
