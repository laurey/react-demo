require("ignore-styles");
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/env", "@babel/react"],
});

require("./app");
