/*
 * @Author: Yoneyy (y.tianyuan) 
 * @Date: 2022-03-18 02:10:53 
 * @Last Modified by: Yoneyy (y.tianyuan)
 * @Last Modified time: 2022-03-22 20:57:09
 */

/**
 * override the configuration
 * @author Yoneyy(y.tianyuan)
 */
const fs = require('fs');
const path = require('path');

/**
 * overrides
 * @returns
 */
function overrides() {
  const overrideConfigPath = path.resolve('./config-overrides.js');
  const {
    rules = [],
    plugins = [],
    babels = {
      presets: [],
      plugins: []
    }
  } = fs.existsSync(overrideConfigPath)
      ? require(overrideConfigPath)
      : {};

  return {
    rules,
    babels,
    plugins,
  }
}

module.exports = overrides;