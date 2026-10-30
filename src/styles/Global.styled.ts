import { createGlobalStyle } from "styled-components";
import { reset } from "./mixins";
import { theme } from "./Theme.Styled";

export const GlobalStyle = createGlobalStyle`
    * {
        ${reset}    
}

body {
    font-family: ${(props) => props.theme.font.primary};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.font.weight};
    background-color: ${theme.color.dark.background};

}

h1{
    font-family: ${(props) => props.theme.font.primary}
}
h2, h{
    font-family: ${(props) => props.theme.font.primary};
}

img {
    width: 100%;
}

`;
