import { NavMenu } from "@constants";
import styled from "@emotion/styled";

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
            <a href="#">{menu.name}</a>
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
  }
`;
