
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);