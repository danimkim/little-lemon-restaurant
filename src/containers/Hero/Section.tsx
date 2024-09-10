import styled from "@emotion/styled";
import Wrapper from "components/Wrapper";
import MainImage from "@assets/restaurant.jpg";
import Button from "components/Button";

export default function Section() {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <Heading className="headline-text">Little Lemon</Heading>
          <SubHeading className="headline-text">Chicago</SubHeading>
          <Para>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Para>
          <ReserveButton>Reserve a Table</ReserveButton>
        </div>
        <Image src={MainImage} alt="Restaurant Food" />
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.main.primary};
`;

const ContentWrapper = styled(Wrapper)`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: 406px;
    padding: 36px 0;
    display: flex;
    justify-content: space-between;
  }
`;

const Heading = styled.h1`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 70px;
    color: ${({ theme }) => theme.colors.main.secondary};
  }
`;

const SubHeading = styled.p`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 44px;
    color: ${({ theme }) => theme.colors.highlight.primary};
  }
`;

const Para = styled.p`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    max-width: 322px;
    color: ${({ theme }) => theme.colors.highlight.primary};
    font-size: 23px;
    margin-top: 16px;
    line-height: 30px;
  }
`;

const Image = styled.img`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 395px;
    height: 415px;
    border-radius: 30px;
  }
`;

const ReserveButton = styled(Button)`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-top: 20px;
  }
`;
