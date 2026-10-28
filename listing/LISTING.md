# AMO listing copy

Copy/paste these into the addons.mozilla.org submission form.

## Name
UnWall.app

## Add-on URL (slug)
unwall

## Summary (max 250 chars)
One click (or Alt+Shift+U) reopens the article you're reading on unwall.app, right in the same tab. No tracking, no data collection, and it only reads the URL of the tab you click it on.

## Description

Hit a paywall? Click the UnWall.app button in your toolbar and the current page reopens on unwall.app in the same tab.

**How it works**
UnWall.app takes the address of the page you're on and adds unwall.app to the front of it:

https://www.example.com/news/some-article
→ https://unwall.app/www.example.com/news/some-article

That's all it does.

**Features**
• One-click toolbar button
• Keyboard shortcut: Alt+Shift+U (change it in Add-ons → ⚙ → Manage Extension Shortcuts)
• Opens in the same tab, so the Back button returns you to the original page
• Leaves non-web pages (about:, file:, etc.) and pages already on unwall.app alone

**Privacy**
UnWall.app collects no data and makes no network requests of its own. It uses only the "activeTab" permission, so it can read the URL of the current tab only at the moment you click the button. The page you open is then served by unwall.app, a third-party service with its own privacy policy.

UnWall.app is an independent project and is not affiliated with unwall.app.

## Categories
Feeds, News & Blogging (primary), Other

## Tags
paywall, news, reader, articles

## License
MIT

## Support email / website
(fill in your own)

## Privacy policy
Not required: the add-on declares `data_collection_permissions: none`.

## Notes to reviewer
No build step, minifier or bundler. The submitted files are the source.
The add-on has one background script (background.js) that listens for
browser.action.onClicked, rewrites the tab URL from "https://host/path" to
"https://unwall.app/host/path" and calls browser.tabs.update on the same tab.
The only permission is activeTab. No remote code, no data collection.

To test: open any https article, then click the toolbar button or press
Alt+Shift+U. The tab navigates to the unwall.app version.
