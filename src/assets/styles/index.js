import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  html {
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;

      main {
        display: flex;
        background: #2f2f2f;
        flex-direction: column;

        @media screen and (min-width: 992px) {
          flex-direction: row;
        }

        .left-content {
          display: flex;
          width: 100%;
          flex: 1 1 20%;
        }

        .right-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          flex: 1 1 80%;
        }
      }
    }
  }
`;

export const Main = styled.div`

`;

