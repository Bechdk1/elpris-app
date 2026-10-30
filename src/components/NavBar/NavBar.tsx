import { Link, NavLink } from "react-router-dom";
import { Li, Ul } from "../../styles/Element.styled";
import { NavBarStyled } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Ul>
        <Li>
          <Link to="/">
            <img src="src\assets\logo.svg" alt="logo" />
          </Link>
        </Li>
        <Li>
          <NavLink to="/oversigt">Oversigt</NavLink>
        </Li>
        <Li>
          <NavLink to="/lige-nu">Lige nu</NavLink>
        </Li>
        <Li>
          <NavLink to="/historik">Historik</NavLink>
        </Li>
      </Ul>
    </NavBarStyled>
  );
};
