export type TargetBrowser = "chrome" | "firefox" | "safari";

const rawBrowser = process.env.BROWSER;

const getBrowser = (): TargetBrowser => {
  if (rawBrowser === "firefox") {
    return "firefox";
  }
  if (rawBrowser === "safari") {
    return "safari";
  }
  return "chrome";
};

export const browser: TargetBrowser = getBrowser();

export const isFirefox = browser === "firefox";
export const isChrome = browser === "chrome";
export const isSafari = browser === "safari";

export const getOutDir = () => {
  return `dist/${browser}`;
};

export const getManifestSrc = () => {
  if (isFirefox) {
    return "manifest/firefox.json";
  }
  if (isSafari) {
    return "manifest/safari.json";
  }
  return "manifest/chrome.json";
};
