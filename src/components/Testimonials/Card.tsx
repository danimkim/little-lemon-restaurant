import filledStar from "@assets/star-filled.svg";
import styled from "@emotion/styled";

interface IProps {
  data: {
    ratings: number;
    avatarSrc: string;
    name: string;
    testimonial: string;
  };
}

export default function Card({ data }: IProps) {
  return (
    <Container>
      <ul>
        <PhotoAndNameWrapper>
          <AvatarItem>
            <img src={data.avatarSrc} alt="" />
          </AvatarItem>
          <ReviewerItem>
            <li>{data.name}</li>
            <IconItem>
              {Array.from(Array(data.ratings)).map((star, idx) => (
                <img key={idx} src={filledStar} alt={star} />
              ))}
            </IconItem>
          </ReviewerItem>
        </PhotoAndNameWrapper>
        <Text>{data.testimonial}</Text>
      </ul>
    </Container>
  );
}

const Container = styled.article`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    padding: 15px;

    ul {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding: 20px;
  }
`;

const PhotoAndNameWrapper = styled.div`
  display: flex;
  align-items: last baseline;
`;

const AvatarItem = styled.li`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 70px;
    border-radius: 50%;
    overflow: hidden;

    & > img {
      width: 100%;
    }
  }
`;

const ReviewerItem = styled.div`
  margin-left: 10px;
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 14px;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: 16px;
  }
`;

const IconItem = styled.li`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 10px;
    display: flex;
    margin-top: 3px;

    & > img {
      width: 100%;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 15px;
    margin-top: 5px;
  }
`;

const Text = styled.li`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 12px;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: 15px;
  }
`;
