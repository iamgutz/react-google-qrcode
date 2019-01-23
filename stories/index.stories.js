/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import QRCode from '../src/index';
import { QR_DEFAULT_SIZE } from '../src/constants';
import { Content, Title } from './styles';

const dynamicStories = storiesOf('DEMO', module);
dynamicStories.addDecorator(withKnobs);

dynamicStories.add('Basic Usage', () => {
  const knobs = {
    data: 'https://www.google.com',
    size: QR_DEFAULT_SIZE,
    framed: false,
  };

  return (
    <Content>
      <Title>React Google QR code</Title>
      <QRCode
        data={text('data', knobs.data)}
        size={number('size (pixels)', knobs.size)}
        framed={boolean('framed', knobs.framed)}
      />
    </Content>
  );
});
