import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'MyComponent',
  decorators: [withTests({ results })],
};

export const defaultView = () => <div>Jest results in storybook</div>;
defaultView.parameters = {
  jest: ['MyComponent.test.js', 'MyOtherComponent.test.js'],
};