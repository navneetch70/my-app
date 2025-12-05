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
}

const VStackContainer = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: ${({ gap }) => (typeof gap === "number" ? `${gap}px` : gap || "8px")};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

export default function VStack({ children, ...rest }: StackProps) {
  return <VStackContainer {...rest}>{children}</VStackContainer>;
}
