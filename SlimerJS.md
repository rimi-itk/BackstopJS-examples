macOS
-----

SlimerJS (as of writing) only supports Firefox 50 (and earlier):

```
mkdir -p ~/.slimerjs/firefox
cd ~/.slimerjs/firefox
curl https://ftp.mozilla.org/pub/firefox/releases/50.0/mac/en-US/Firefox%2050.0.dmg > Firefox.dmg
hdiutil mount Firefox.dmg
cp -Rv /Volumes/Firefox/Firefox.app .
hdiutil unmount /Volumes/Firefox
rm Firefox.app
cd -
```

Run backstop:

```
SLIMERJSLAUNCHER=~/.slimerjs/firefox/Firefox.app/Contents/MacOS/firefox backstop --config grundsalgaarhus.js reference
```
