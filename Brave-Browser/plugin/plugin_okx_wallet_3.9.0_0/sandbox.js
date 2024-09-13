window.chrome = null;
window.browser = null;
const AssetsBuildTypeEnumEnv = {
  // eslint-disable-next-line @ok/oklint/no-hardcode-cdn
  dev: `https://static-daily.okg.com/cdndev/assets/okfe/inner/wallet-config/hot.js?v=${Date.now()}`,
  // eslint-disable-next-line @ok/oklint/no-hardcode-cdn
  daily:
    // eslint-disable-next-line @ok/oklint/no-hardcode-cdn
    `https://static-daily.okg.com/cdn/assets/okfe/inner/wallet-config/hot.js?v=${Date.now()}`,
  prepub: `https://okg-pub-hz.oss-accelerate.aliyuncs.com/cdnpre/assets/okfe/inner/wallet-config/hot.js?v=${Date.now()}`,
};
let loadedScript;
let startLoaded;

const cdnDomain = (e) => {
  if (
    (!loadedScript || (loadedScript && loadedScript != e.data.cdn)) &&
    !startLoaded
  ) {
    startLoaded = true;
    let cdnScript =
      AssetsBuildTypeEnumEnv[e.data.buildType] ||
      `https://${
        e.data.cdn
      }/cdn/assets/okfe/inner/wallet-config/hot.js?v=${Date.now()}`;
    if (e.data.browser === 'Edge' && e.data.buildType === 'prepub') {
      cdnScript = `https://${
        e.data.cdn
      }/cdn/assets/okfe/inner/wallet-config/hot.js?v=${Date.now()}`;
    }

    fetch(cdnScript)
      .then((response) => {
        return response.text();
      })
      .then((res) => {
        window.removeEventListener('message', cdnDomain);
        loadedScript = e.data.cdn;
        // eslint-disable-next-line no-eval
        eval(res);
      })
      .catch(() => {
        startLoaded = false;
      });
  }
};

window.addEventListener('message', cdnDomain);
