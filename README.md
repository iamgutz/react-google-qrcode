# React Google QR Code
[![Version](https://img.shields.io/npm/v/react-google-qrcode.svg?style=for-the-badge&logo=appveyor)]()
[![React](https://img.shields.io/npm/dependency-version/react-google-qrcode/react.svg?style=for-the-badge&logo=appveyor)]()
[![Downloads](https://img.shields.io/npm/dw/react-google-qrcode.svg?style=for-the-badge&logo=appveyor)]()
[![License](https://img.shields.io/github/license/iamgutz/react-google-qrcode.svg?style=for-the-badge&logo=appveyor)]()

react-google-qrcode is a React Component to generate a QR code via Google Chart API.
![screen shot](https://raw.githubusercontent.com/iamgutz/react-google-qrcode/master/screenshots/demo-image.png)

## Installation
```
$ yarn add react-google-qrcode
or
$ npm install --save react-google-qrcode
```

## Usage

```
import React, { Component } from 'react';
import QRCode from 'react-google-qrcode';

class App extends Component {
  render() {
    return (
        <div>
          <QRCode
            data="https://www.google.com"
            size={130}
            framed
          />
        </div>
    );
  }
}
```

### Props
|Prop| Type | Required | Description| Default
|---	|---	|--- |--- |--- |
|data| String | No | The data to encode| -
|size| Number | No | Image size in pixels (width x height). Min value: 30, Max value: 547| 130
|framed| Boolean | No |  Adds a frame to the image| false

# Demo
You want to see some examples? Easy, follow this steps:

* Clone this Repo https://github.com/iamgutz/react-google-qrcode
* Install dependencies, run `yarn` or `npm install`
* Run Storybook `yarn storybook` or `npm run storybook`
* It will open your browser with the storybook examples
