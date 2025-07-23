module.exports = {
  // ...tu configuración actual
  ignoreWarnings: [
    {
      module: /@mediapipe[\\/]tasks-vision/,
      message: /Failed to parse source map/,
    },
  ],
};
