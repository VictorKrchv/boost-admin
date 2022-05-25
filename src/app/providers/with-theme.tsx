import React from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

import { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {};
  }
}

export const withTheme = (component: () => React.ReactNode) => () => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {component()}
    </StyledThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
    *, *:after, *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none
    }

    body {
      font-family: "Roboto" sans-serif
    }

  #root {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const theme: DefaultTheme = {
  colors: {},
};
