const merge = require('merge')
const ts_preset = require('ts-jest/jest-preset')
const puppeteer_preset = require('jest-puppeteer/jest-preset')

module.exports = merge.recursive(ts_preset, puppeteer_preset, {
    globals: {
        preset: '@shelf/jest-mongodb',
        test_url: `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3000}`,
    },
})

// jest.config.ts
import type { Config } from '@jest/types';

// jest.config.js
// Sync object
module.exports = {
  verbose: true,
};

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};






