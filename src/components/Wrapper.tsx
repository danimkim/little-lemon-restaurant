import styled from "@emotion/styled";

interface IProps {
  children: React.ReactNode;
  attr?: any;
}

export default function Wrapper(props: IProps) {
  const { children, ...attr } = props;
  return <Div {...attr}>{children}</Div>;
}

const Div = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    max-width: 740px;
    margin: 0 auto;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    max-width: 899px;
  }
`;
