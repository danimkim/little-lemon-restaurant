import styled from "@emotion/styled";
import Button from "@components/Button";
import { HighlightCard } from "@components/Highlights";
import Wrapper from "@components/Wrapper";
import GreekSaladImg from "@assets/greek-salad.jpg";
import LemonDessertImg from "@assets/lemon-dessert.png";
import BruschettaImg from "@assets/brughetta.png";

export default function HighlightsSection() {
  const mockData = [
    {
      title: "Greek Salad",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      imgSrc: GreekSaladImg,
      price: "12.99",
    },
    {
      title: "Bruschetta",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      imgSrc: BruschettaImg,
      price: "5.99",
    },
    {
      title: "Lemon Dessert",
      desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      imgSrc: LemonDessertImg,
      price: "5.00",
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
            <HighlightCard key={idx} data={card} />
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
