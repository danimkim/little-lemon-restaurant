import styled from "@emotion/styled";
import DeliveryIcon from "@assets/delivery-icon.svg";

interface IProps {
  data: {
    title: string;
    desc: string;
    imgSrc: string;
    price: string;
  };
}

export default function Card({ data }: IProps) {
  const { title, desc, imgSrc, price } = data;
  return (
    <Container>
      <ImageContainer>
        <img src={imgSrc} alt="" />
      </ImageContainer>
      <InnerContainer>
        <ContentList>
          <div className="title-wrapper">
            <dt className="title">
              <h3>{title}</h3>
            </dt>
            <dd className="price">{`$${price}`}</dd>
          </div>
          <dd className="desc">{desc}</dd>
        </ContentList>
        <OrderButton>
          Order a Delivery
          <img src={DeliveryIcon} alt="" />
        </OrderButton>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.article`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 280px;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;

    height: 180px;

    & > img {
      height: 100%;
      margin-left: -20px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    height: 230px;
  }
`;

const InnerContainer = styled.div`
  height: 325px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.sub.tertiarary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentList = styled.dl`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    & > .title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > .title > h3 {
        font-weight: 700;
      }

      & > .price {
        color: ${({ theme }) => theme.colors.sub.primary};
      }
    }

    & > .desc {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.main.primary};
      margin-top: 25px;
      line-height: 23px;
    }
  }
`;

const OrderButton = styled.button`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: max-content;
    text-align: left;
    font-weight: 700;

    & > img {
      margin-left: 10px;
      vertical-align: -10px;
    }
  }
`;
