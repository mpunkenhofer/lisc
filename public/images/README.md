# Spritesheets

In order to generate spritesheets from the icon files [ImageMagick](https://imagemagick.org/index.php) can be used.

## Realm Spritesheet

`magick *_realm_icon.png +append realm_spritesheet.png`

## Class Spritesheet

`magick montage -background none -mode concatenate *_class_icon.png class_spritesheet.png`
