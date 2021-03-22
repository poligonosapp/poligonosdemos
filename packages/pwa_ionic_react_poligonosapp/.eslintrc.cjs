module.exports = {
    parser: 'babel-eslint',
}

module.exports = {
    parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: ".babelrc.json",
    },
  },
}
