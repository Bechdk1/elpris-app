import styled from "styled-components";
import { theme } from "../../styles/Theme.Styled";
import { resetLink } from "../../styles/mixins";

export const NavBarStyled = styled.nav`
  display: flex;
  width: 80%;
  margin: 10px;

  ul {
    justify-content: space-evenly;
    display: flex;
    width: 100%;
    align-items: center;
  }

  a {
    font-family: ${theme.font.primary};
    font-size: ${theme.fontSize.l};
    ${resetLink}
  }
`;
