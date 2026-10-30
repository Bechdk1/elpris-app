import styled from "styled-components";
import { theme } from "../../styles/Theme.Styled";

export const ContentWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin: auto;

  h2 {
    width: 100%;
    background-color: ${theme.color.palette.background};
    text-align: center;
    text-transform: uppercase;
    color: ${theme.color.palette.light};
    font-size: ${theme.fontSize.l};
  }
`;
