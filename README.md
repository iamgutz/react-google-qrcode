# React Image Loader HOC
[![Version](https://img.shields.io/npm/v/react-image-loader-hoc.svg?style=for-the-badge&logo=appveyor)]()
[![React](https://img.shields.io/npm/dependency-version/react-image-loader-hoc/react.svg?style=for-the-badge&logo=appveyor)]()
[![Downloads](https://img.shields.io/npm/dw/react-image-loader-hoc.svg?style=for-the-badge&logo=appveyor)]()
[![License](https://img.shields.io/github/license/iamgutz/react-image-loader-hoc.svg?style=for-the-badge&logo=appveyor)]()

React-Image-Loader-HOC is a High Order Component that allows you to enhance your React Image Component by adding features to handle the loading of the image source in an elegant way.

## Features
* Super easy to use.
* Customizable - Provided props to make it custom for your project.

## Installation
```
$ yarn add react-image-loader-hoc
or
$ npm install --save react-image-loader-hoc
```

## Usage

```
import React, { Component } from 'react';
import withImageLoader from 'react-image-loader-hoc';

const Image = props => (<img alt="" {...props} />);
const ImageWithLoader = withImageLoader(Image);

class App extends Component {
  render() {
    return (
        <div>
          <ImageWithLoader
            src="https://edmullen.net/test/rc.jpg"
            width="400px"
            height="200px"
          />
        </div>
    );
  }
}
```

### Props
|Prop| Type | Required | Description| Default
|---	|---	|--- |--- |--- |
|src| String | Yes | Image url| -
|onLoad| Function | No | Callback when load is successful| -
|onError| Function | No |  Callback when load fails| -
|loaderComp| Component | No | Custom React component to be displayed while loading| -
|errorComp| Component | No | Custom React component to be displayed on Error| -
|fadeIn| Boolean | No | Load the image with Fade In effect| True

# Demo
You want to see some examples? Easy, follow this steps:

* Clone this Repo https://github.com/iamgutz/react-image-loader-hoc
* Install dependencies, run `yarn` or `npm install`
* Run Storybook `yarn storybook` or `npm run storybook`
* It will open your browser with the storybook examples
