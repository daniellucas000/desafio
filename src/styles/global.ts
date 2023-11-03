import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme['background']};
    }

    body, input, textarea, button {
        font: 400 1rem 'Poppins', sans-serif;
    } 

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;
