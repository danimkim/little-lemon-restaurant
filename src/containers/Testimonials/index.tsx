import styled from "@emotion/styled";
import { TestimonialCard } from "@components/Testimonials";
import Wrapper from "@components/Wrapper";
import Avatar01 from "@assets/avatar01.jpg";
import Avatar02 from "@assets/avatar02.jpg";
import Avatar03 from "@assets/avatar03.jpg";
import Avatar04 from "@assets/avatar04.jpg";

export default function Testimonials() {
  const mockData = [
    {
      ratings: 5,
      avatarSrc: Avatar01,
      name: "John",
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dolore quas unde debitis culpa vel possimus a at,",
    },
    {
      ratings: 4,
      avatarSrc: Avatar02,
      name: "Michael",
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dolore quas unde debitis culpa vel possimus a at,",
    },
    {
      ratings: 4,
      avatarSrc: Avatar03,
      name: "Susan",
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dolore quas unde debitis culpa vel possimus a at,",
    },
    {
      ratings: 5,
      avatarSrc: Avatar04,
      name: "Cheryl",
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dolore quas unde debitis culpa vel possimus a at,",
    },
  ];

  return (
    <Section>
      <ContentWrapper>
        <Heading className="headline-text">Testimonials</Heading>
        <CardContainer>
          {mockData.map((card, idx) => (
            <TestimonialCard key={idx} data={card} />
          ))}
        </CardContainer>
      </ContentWrapper>
    </Section>
  );
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.main.secondary};

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-top: 85px;
    height: 475px;
  }
`;

const Heading = styled.h2`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 58px;
    text-align: center;
    font-weight: 500;
  }
`;

const ContentWrapper = styled(Wrapper)`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    padding-top: 65px;
  }
`;

const CardContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 50px;
  }
`;
