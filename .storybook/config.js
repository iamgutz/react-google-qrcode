import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
addDecorator(
  withOptions({
    name: 'Writing Stories',
    url: 'https://storybook.js.org/basics/writing-stories/',
    addonPanelInRight: true,
  })
)
configure(loadStories, module);
