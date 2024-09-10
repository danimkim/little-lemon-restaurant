import { FooterNavMenu } from "@constants";
import styled from "@emotion/styled";
import Wrapper from "components/Wrapper";
import Photo from "@assets/restauranfood.jpg";

interface IFooterMenu {
  id: number;
  name: string;
  children: {
    id: number;
    name: string;
    link: string;
  }[];
}

export default function Footer() {
  return (
    <Container>
      <ContentWrapper>
        <img src={Photo} alt="Restaurant indoor" className="image" />
        <CategoryList>
          {FooterNavMenu.map((footerMenu: IFooterMenu) => {
            return (
              <li key={footerMenu.id}>
                <span className="category-name">{footerMenu.name}</span>
                <NavMenuList>
                  {footerMenu.children.map((menu) => {
                    return (
                      <li key={menu.id} className="nav-menu">
                        <a href={menu.link}>{menu.name}</a>
                      </li>
                    );
                  })}
                </NavMenuList>
              </li>
            );
          })}
        </CategoryList>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.highlight.secondary};

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-top: 50px;
    padding: 65px 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-top: 50px;
    padding: 65px 0;
  }
`;

const ContentWrapper = styled(Wrapper)`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: flex;

    & > .image {
      width: 300px;
      height: 320px;
      border-radius: 15px;

      & > img {
        width: auto;
        height: 100%;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    & > .image {
      width: 300px;
      height: 320px;

      & > img {
        width: auto;
        height: 100%;
      }
    }
  }
`;

const CategoryList = styled.ul`
  color: ${({ theme }) => theme.colors.highlight.primary};

  & > li > .category-name {
    font-weight: 700;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-left: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    & > li > .category-name {
      font-size: 18px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-left: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

const NavMenuList = styled.ul`
  & > .nav-menu {
    margin-top: 5px;
    a {
      color: ${({ theme }) => theme.colors.highlight.primary};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-top: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    & > .nav-menu {
      margin-top: 10px;
    }
  }
`;
