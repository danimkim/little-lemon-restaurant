import styled from "@emotion/styled";
import Logo from "@assets/Logo.svg";
import Wrapper from "@components/Wrapper";
import Nav from "./Nav";

export default function Header() {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <ImageWrapper>
          <img src={Logo} alt="Little Lemon" />
        </ImageWrapper>
        <Nav />
      </ContentWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: 147px;
  }
`;

const ContentWrapper = styled(Wrapper)`
  height: 100%;

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: flex;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 206px;

    & > img {
      display: block;
      width: 100%;
    }
  }
`;
