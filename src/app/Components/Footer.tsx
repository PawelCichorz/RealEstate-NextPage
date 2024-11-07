'use client';
import * as S from './FooterStyled';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <S.Footer>
      <S.Box>
        <S.About>
          <h3>O nas</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae excepturi facere veritatis vitae quod. Tempora odio
            praesentium, repellat, vitae culpa ullam dolorum recusandae
            architecto debitis eveniet error...
          </p>
          <Link href="/about">Więcej</Link>
        </S.About>
        <S.Contact>
          <h3>Kontakt</h3>

          <S.divOneTwo>
            <p>
              <strong>Biuro Nieruchomości Pawłowski</strong>
            </p>
            <p>Piłsudskiego 3A</p>
            <p>32-050 Skawina</p>
          </S.divOneTwo>
          <S.divOneTwo>
            <p>
              <strong>Oddział Wadowice</strong>
            </p>
            <p>Piłsudskiego 3A</p>
            <p>32-050 Wadowice</p>
          </S.divOneTwo>
          <S.Num>
            <p>Tel: 513 189 109</p>
            <p>Emial: Pnieruchomosci@gmail.com</p>
          </S.Num>
        </S.Contact>
        <S.Menu>
          <h3>Menu</h3>
          <S.StyledLink href="/">Strona Główna</S.StyledLink>
          <S.StyledLink href="/">Firma</S.StyledLink>
          <S.StyledLink href="/offers">Oferty</S.StyledLink>
          <S.StyledLink href="/about">Kontakt</S.StyledLink>
        </S.Menu>
        <S.Media>
          <h3>Media Społeczniościowe</h3>
          <S.SocialMedia>
            <S.SocialIconLink
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </S.SocialIconLink>
            <S.SocialIconLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </S.SocialIconLink>
          </S.SocialMedia>
        </S.Media>
      </S.Box>
      <S.FooterDown>
        &copy; {new Date().getFullYear()} PC Company. All rights reserved.
      </S.FooterDown>
    </S.Footer>
  );
};

export default Footer;
