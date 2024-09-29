import { NavMenu } from "@constants";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface INavMenu {
  id: number;
  name: string;
  link: string;
}

export default function Nav() {
  return (
    <NavContainer>
      <MenuList>
        {NavMenu.map((menu: INavMenu) => (
          <MenuItem key={menu.id}>
            <Link to={menu.link || "/"}>{menu.name}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    flex-grow: 2;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MenuItem = styled.li`
  & > a {
    color: ${({ theme }) => theme.colors.highlight.secondary};
    font-weight: 700;
    font-size: 17px;
    &:hover {
      transition: all ease-in-out 0.2s;
      color: rgba(51, 51, 51, 0.7);
    }
  }
`;
