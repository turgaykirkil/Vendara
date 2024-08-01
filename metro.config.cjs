const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  defaultConfig.resolver.sourceExts.push("jsx", "js", "ts", "tsx"); // Gerekli uzantıları ekleyin
  return defaultConfig;
})();
