<p align="center">
  <img src="icons/icon.svg" width="96" height="96" alt="UnWall.app logo">
</p>

<h1 align="center">UnWall.app</h1>

<p align="center">
  A Firefox / Zen Browser extension that reopens the article you're reading on <a href="https://unwall.app">unwall.app</a>, in the same tab, with one click.
</p>

---

## What it does

Click the toolbar button (or press **Alt+Shift+U**) and the current page reopens on unwall.app:

```
https://www.wired.com/story/foo/  →  https://unwall.app/www.wired.com/story/foo/
```

- Opens in the same tab, so **Back** returns you to the original page
- Keeps query strings and `#anchors`
- Does nothing on non-web pages (`about:`, `file:`, …) or pages already on unwall.app

## Privacy

- **No data collection.** The manifest declares `data_collection_permissions: none`.
- **One permission:** `activeTab`, which lets the extension read the current tab's URL only when you click the button.
- No remote code, analytics or network requests of its own.

## Install

### From addons.mozilla.org
_Link coming once the listing is approved._

### Temporary (for testing)
1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on…** and pick `manifest.json`

The extension stays loaded until you restart the browser.

## Development

Requires Node.js 18+.

```sh
npm install
npm start        # launch Firefox with the extension loaded (auto-reloads on change)
npm run lint     # validate with Mozilla's add-on linter
npm run build    # package to web-ext-artifacts/unwall.app-<version>.zip
```

### Project layout

```
manifest.json         Extension manifest (MV3)
background.js         URL rewrite + click handler
icons/                Logo (SVG source + rendered PNGs)
listing/              AMO listing copy, reviewer notes, API metadata
web-ext-config.mjs    Excludes non-extension files from the build
```

To regenerate the PNG icons after changing `icons/icon.svg`:

```sh
for s in 16 32 48 96 128; do rsvg-convert -w $s -h $s icons/icon.svg -o icons/icon-$s.png; done
```

### Releasing

1. Bump `version` in `manifest.json` (and `package.json`)
2. `npm run lint && npm run build`
3. Upload `web-ext-artifacts/unwall.app-<version>.zip` under **Upload New Version** on the add-on's AMO page

## License

[MIT](LICENSE)
