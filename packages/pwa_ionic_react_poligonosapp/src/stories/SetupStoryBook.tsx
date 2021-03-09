// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { YourComponent } from './YourComponent';

import { Header } from './Header/Header.stories';
import { Button } from './Button/Button';
import { Page } from './Page/Page';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'YourComponent',
    component: YourComponent,
};
import L from 'leaflet';

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

const mymap = (typeof L.Map)'./polygon.geojson';

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof YourComponent>> = (args) =>
  <YourComponent { mymap } />;

export const FirstStory = Template.bind({});
FirstStory.args = {
    /*👇 The args you need here will depend on your component */
    mymap: (typeof L.Map)'./polygon.geojson';
};

render(){
<Header />
<Button/>
<Page/>
};

 module.exports = {};