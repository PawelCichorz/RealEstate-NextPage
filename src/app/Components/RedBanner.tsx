'use client';
import * as S from './RedBannerStyled';

interface RedBannerProps {
  text: string;
  buttonText?: string;
}

const RedBanner = ({ text, buttonText }: RedBannerProps) => (
  <S.RedDiv>
    <p className="red-banner-text">{text}</p>
    {buttonText && <button className="red-banner-button">{buttonText}</button>}
  </S.RedDiv>
);

export default RedBanner;
