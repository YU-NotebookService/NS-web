import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color : #0D3F7A;
        --gray-color : #838583; 
    }
    body {
        font-family : pretendard;
    }
    .Content {
      width: 100%;
      padding: 0px 230px;
    }
`;

export default GlobalStyles;
