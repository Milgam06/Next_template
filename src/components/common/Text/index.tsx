import * as S from "./styled";

interface TextElementProps extends S.TextStyleProps {
  children: React.ReactNode;
}

export const Text = ({
  fontSize,
  fontWeight,
  fontColor,
  letterSpacing,
  lineHeight,
  wordBreak,
  children,
}: TextElementProps) => {
  return (
    <S.TextElement
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontColor={fontColor}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      wordBreak={wordBreak}
    >
      {children}
    </S.TextElement>
  );
};
