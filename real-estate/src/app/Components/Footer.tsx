"use client"
import * as S from "./FooterStyled"; // Import stylów, jeśli są używane

const Footer = () => {
  return (
    <S.Footer>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </S.Footer>
  );
};

export default Footer;