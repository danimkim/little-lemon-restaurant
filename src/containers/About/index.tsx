import styled from "@emotion/styled";
import Wrapper from "components/Wrapper";
import Photo01 from "@assets/mario-and-adrian_a.jpg";
import Photo02 from "@assets/mario-and-adrian_b.jpg";

export default function About() {
  return (
    <Section>
      <ContentWrapper>
        <TextContainer>
          <Heading className="headline-text">Little Lemon</Heading>
          <SubHeading className="headline-text">Chicago</SubHeading>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            unde omnis perferendis mollitia totam laboriosam nulla, illo
            voluptatum nemo fugiat in blanditiis adipisci eum voluptas aperiam
            consequatur cumque reiciendis inventore? Debitis asperiores ex
            laboriosam laborum sed consequuntur, pariatur nemo doloremque culpa,
            vitae nisi sint iure totam animi voluptatem eos aperiam accusantium.
            Sequi eum, recusandae similique voluptatibus magnam culpa eaque
            beatae.
          </p>
        </TextContainer>

        <ImageWrapper>
          <div className="sub">
            <img
              src={Photo02}
              alt="Mario and Adrian in the restaurant kitchen"
            />
          </div>
          <div className="main">
            <img
              src={Photo01}
              alt="Mario and Adrian in the restaurant kitchen"
            />
          </div>
        </ImageWrapper>
      </ContentWrapper>
    </Section>
  );
}

const Section = styled.section`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: 560px;
  }
`;

const ContentWrapper = styled(Wrapper)`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Heading = styled.h2`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 70px;
  }
`;

const SubHeading = styled.p`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 33px;
  }
`;

const TextContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 400px;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    & > .desc {
      margin-top: 20px;
      line-height: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    & > .main,
    & > .sub {
      width: 180px;
      height: 240px;
      overflow: hidden;
      position: absolute;

      & > img {
        width: auto;
        height: 100%;
      }
    }

    & > .main {
      top: 90px;
      right: 0;

      & > img {
        margin-left: -150px;
      }
    }

    & > .sub {
      left: -310px;
      bottom: 100px;

      & > img {
        margin-left: -150px;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    & > .main,
    & > .sub {
      width: 260px;
      height: 350px;
    }

    & > .main {
      top: 60px;
      right: 0;
      z-index: 5;
    }

    & > .sub {
      left: -450px;
      bottom: 20px;

      & > img {
        margin-left: -250px;
      }
    }
  }
`;
