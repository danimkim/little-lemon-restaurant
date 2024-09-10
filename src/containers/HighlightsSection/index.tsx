import styled from "@emotion/styled";
import Button from "components/Button";
import Card from "components/Highlights/Card";
import Wrapper from "components/Wrapper";
import Img from "@assets/greek-salad.jpg";

export default function HighlightsSection() {
  const mockData = [
    {
      title: "Greek Salad",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      imgSrc: Img,
      price: "12.99",
    },
    {
      title: "Greek Salad",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      imgSrc: "/",
      price: "12.99",
    },
    {
      title: "Greek Salad",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      imgSrc: "/",
      price: "12.99",
    },
  ];

  return (
    <Section>
      <ContentWrapper>
        <HeadingWrapper>
          <h2 className="headline-text">This Week's Specials!</h2>
          <Button>Order Online</Button>
        </HeadingWrapper>
        <div className="card-container">
          {mockData.map((card, idx) => (
            <Card key={idx} data={card} />
          ))}
        </div>
      </ContentWrapper>
    </Section>
  );
}

const Section = styled.section``;

const HeadingWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 137px;

    & > h2 {
      font-size: 58px;
      font-weight: 600;
    }
  }
`;

const ContentWrapper = styled(Wrapper)`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    & > .card-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    & > .card-container {
      gap: 28px;
    }
  }
`;
