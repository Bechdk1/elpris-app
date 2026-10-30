import { Link } from "react-router-dom";
import { HeaderStyled } from "./Header.Styled";
import { NavBar } from "../../components/NavBar/NavBar";

export const Header = () => {
  return (
    <HeaderStyled>
      <NavBar />
    </HeaderStyled>
  );
};
