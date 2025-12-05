"use client";

import styled from "styled-components";
import type { HTMLAttributes, ReactNode } from "react";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: string | number;
  align?: string;
  justify?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
  hover?: string;
}

const HStackContainer = styled.div<StackProps>`
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: ${({ gap }) => (typeof gap === "number" ? `${gap}px` : gap || "8px")};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  ${({ hover }) =>
    hover &&
    `
    &:hover {
      background-color: ${hover};
    }
  `}
`;

export default function HStack({ children, ...rest }: StackProps) {
  return <HStackContainer {...rest}>{children}</HStackContainer>;
}
