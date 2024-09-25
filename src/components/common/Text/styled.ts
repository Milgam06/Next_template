import styled from "@emotion/styled";

export interface TextStyleProps {
  fontSize: number;
  fontWeight: number;
  fontColor?: string;
  letterSpacing?: number;
  lineHeight?: number;
  wordBreak?: "break-all" | "break-word" | "keep-all" | "normal";
}

export const TextElement = styled.span<TextStyleProps>`
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color || "#000"};
  letter-spacing: ${(props) => props.letterSpacing || 0}rem;
  line-height: ${(props) => props.lineHeight || 1};
  word-break: ${(props) => props.wordBreak || "normal"};
`;
