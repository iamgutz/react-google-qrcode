import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { GlobalStyle } from '../stories/styles';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
addDecorator(getStories => (
  <Fragment>
    <GlobalStyle />
    {getStories()}
  </Fragment>
));
addDecorator(
  withOptions({
    name: 'Writing Stories',
    url: 'https://storybook.js.org/basics/writing-stories/',
    addonPanelInRight: true,
  })
)
configure(loadStories, module);
