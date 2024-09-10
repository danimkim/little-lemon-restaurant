import styled from "@emotion/styled";
import * as React from "react";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
}

export default function Button(props: IProps) {
  const {
    width = "247",
    height = "51",
    fontSize = "20",
    borderRadius = "10",
    children,
    ...attr
  } = props;
  return (
    <ButtonStyle
      width={width}
      height={height}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...attr}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<{
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
}>`
  background-color: ${({ theme }) => theme.colors.main.secondary};
  color: ${({ theme }) => theme.colors.highlight.secondary};

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    color: ${({ theme }) => theme.colors.highlight.secondary};
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: 800;
  }
`;
