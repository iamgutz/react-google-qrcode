import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Light.ttf') format('ttf'),
      url('/fonts/Quicksand-Light.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family:  'Quicksand',sans-serif;
  }
  #root {
    height: 100%;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: #4185F4;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 2rem;
  width: 100%;
  text-align: center;
  background: #fff;
  margin: 0 0 2rem 0;
  padding: 1.5rem 0;
  color: #666666;
`;
