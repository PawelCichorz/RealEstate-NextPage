"use client";
import * as S from './RedBannerStyled';

interface RedBannerProps {
    text: string;
    buttonText: string;
    buttonStyle?: React.CSSProperties;
  divStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
    
  }

const RedBanner = ({ text, buttonText, buttonStyle, textStyle,divStyle
 }:RedBannerProps) => {
  return (
    
      <S.RedDiv style={divStyle}>
      <p style={textStyle}>{text}</p>
      <button style={buttonStyle}>{buttonText}</button>
    </S.RedDiv>
    
  );
};

export default RedBanner;