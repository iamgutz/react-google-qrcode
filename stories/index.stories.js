/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import QRCode from '../src/index';
import { QR_DEFAULT_SIZE } from '../src/constants';

const dynamicStories = storiesOf('React Google QR code', module);
dynamicStories.addDecorator(withKnobs);

dynamicStories.add('Example', () => {
  const knobs = {
    data: 'https://github.com/iamgutz/react-google-qrcode',
    sizePx: QR_DEFAULT_SIZE,
    framed: false,
  };

  return (
    <Fragment>
      <h1>React Google QR code</h1>
      <QRCode
        data={text('data', knobs.data)}
        sizePx={number('sizePx', knobs.sizePx)}
        framed={boolean('framed', knobs.framed)}
      />
    </Fragment>
  );
});
