const swDest="./dist/sw.ts";

import React from 'react';
import { configure } from '@storybook/react';

function loadPWA () {
  require('glob-loader!./stories.pattern');
}

configure(loadPWA, module);
