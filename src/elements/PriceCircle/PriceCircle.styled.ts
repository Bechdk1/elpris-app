import styled from "styled-components";
import { theme } from "../../styles/Theme.Styled";

export const PriceCircleStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  width: 60vw;
  height: 60vw;
  border: solid 1px ${theme.color.dark.background};
  background-color: ${theme.color.dark.background};
  box-shadow: 0 0 12px -2px rgba(173, 173, 173, 0.65) inset;
  align-items: center;
  justify-content: center;
  margin: 16px auto;

  &::after {
    content: "";
    width: 52vw;
    height: 52vw;
    border: dashed 1px rgba(85, 236, 32, 0.5);
    border-radius: 50%;
    position: absolute;
  }
  &::before {
    content: "";
    width: 47vw;
    height: 47vw;
    border-radius: 50%;
    border: dashed 1px rgba(85, 236, 32, 0.7);
    position: absolute;
  }
`;
