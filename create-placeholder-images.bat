@echo off

:: Create directories for placeholder images
mkdir public\assets\images\symbols\low
mkdir public\assets\images\symbols\high
mkdir public\assets\backgrounds

:: Create solid-color placeholder images
magick convert -size 100x100 xc:red public\assets\images\symbols\low\bitcoin.png
magick convert -size 100x100 xc:blue public\assets\images\symbols\low\ethereum.png
magick convert -size 100x100 xc:green public\assets\images\symbols\low\cardano.png
magick convert -size 100x100 xc:yellow public\assets\images\symbols\low\binance-coin.png
magick convert -size 100x100 xc:orange public\assets\images\symbols\low\polkadot.png
magick convert -size 100x100 xc:purple public\assets\images\symbols\high\nft-1.png
magick convert -size 100x100 xc:pink public\assets\images\symbols\high\nft-2.png
magick convert -size 100x100 xc:cyan public\assets\images\symbols\high\nft-3.png
magick convert -size 100x100 xc:magenta public\assets\images\symbols\high\nft-4.png
magick convert -size 100x100 xc:lime public\assets\images\symbols\high\nft-5.png
magick convert -size 100x100 xc:gray public\assets\images\symbols\wild.png
magick convert -size 100x100 xc:gold public\assets\images\symbols\scatter.png
magick convert -size 800x600 xc:navy public\assets\backgrounds\background.jpg
