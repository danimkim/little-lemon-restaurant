import Arrow from "@assets/arrow-down.svg";
import styled from "@emotion/styled";

export default function Select() {
  return (
    <>
      <Container>
        <IconWrapper>
          <img src={Arrow} alt="Calendar icon" />
        </IconWrapper>
        <span>Select Date</span>
        <IconWrapper>
          <img src={Arrow} alt="Arrow" />
        </IconWrapper>
      </Container>
      <div></div>
    </>
  );
}

const Container = styled.div`
  border: solid 1px transparent;
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 10px 11px -5px rgba(0, 0, 0, 0.64);

  & > span {
    color: ${({ theme }) => theme.colors.main.primary};
  }
`;

const IconWrapper = styled.div`
  width: 15px;
  height: 15px;

  & > img {
    width: 100%;
  }
`;
