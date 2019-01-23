import React from 'react';
import PropTypes from 'prop-types';
import withImageLoader from 'react-image-loader-hoc';
import { Image, QRCodeWrap } from './styles';
import { getQrImageSrc } from './helpers';
import { QR_DEFAULT_SIZE } from './constants';

const LoadFigure = withImageLoader(Image);

const QRCode = ({ data, sizePx, ...rest }) => (
  <QRCodeWrap size={sizePx} {...rest}>
    <LoadFigure
      src={getQrImageSrc(data, sizePx)}
      size={sizePx}
    />
  </QRCodeWrap>
);

QRCode.propTypes = {
  data: PropTypes.string,
  sizePx: PropTypes.number,
};

QRCode.defaultProps = {
  data: null,
  sizePx: QR_DEFAULT_SIZE,
};

export default QRCode;
