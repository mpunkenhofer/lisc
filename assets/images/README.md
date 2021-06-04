# Spritesheets

In order to generate spritesheets from the icon files [ImageMagick](https://imagemagick.org/index.php) can be used.

## Realm Spritesheet

`magick *_realm_icon.png +append realm_spritesheet.png`

Concatenates all `*_realm_icon.png` images horizontally. To concatenate images vertically use `-append`.

## Class Spritesheet

`magick montage -background none -mode concatenate -tile 9x5 *_class_icon.png class_spritesheet.png`

Arranges all `*_class_icon.png` images in a 9x5 grid with a transparent background.
