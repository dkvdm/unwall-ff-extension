const UNWALL_HOST = "unwall.app";

// https://www.wired.com/story/foo/ -> https://unwall.app/www.wired.com/story/foo/
function toUnwallUrl(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.hostname === UNWALL_HOST) return null;

  const rest = url.href.slice(url.protocol.length + 2); // drop "https://"
  return `https://${UNWALL_HOST}/${rest}`;
}

browser.action.onClicked.addListener((tab) => {
  const target = toUnwallUrl(tab.url);
  if (target) browser.tabs.update(tab.id, { url: target });
});
