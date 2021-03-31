const { getDefaultConfig } = require("metro-config");

//  import PolygonDemo from './components/PolygonDemo.vue';

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("./vueTransformerPlugin.js"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      })
    },
    resolver: {
      sourceExts: [...sourceExts, "vue"]
    }
  };
})();