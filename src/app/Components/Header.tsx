'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import * as S from './HeaderStyled';
import Logo from '../../../public/assets/image/logo2.png';

import { useAuth } from '../contex/AuthContex';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };

  return (
    <S.Header>
      <S.UpContact>
        <S.LoginDiv>
          {isAuthenticated ? (
            <button onClick={logout}>Wyloguj</button>
          ) : (
            <Link href="/login">Zaloguj</Link>
          )}
        </S.LoginDiv>
        <S.ContactDiv>
          <p>Telefon: 513 189 109</p>
          <p>E-mail: pnieruchomości@gmail.com</p>
        </S.ContactDiv>
      </S.UpContact>

      <S.DownContact>
        <Image
          src={Logo}
          alt="logo"
          width={200}
          priority
          style={{ objectFit: 'contain', marginLeft: '30px', height: 'auto' }}
        />
        <S.BurgerButton onClick={toggleBurger}>
          <div />
          <div />
          <div />
        </S.BurgerButton>
        <S.NavDiv>
          <S.Ul>
            <S.Li>
              <Link href="/">Strona Główna</Link>
            </S.Li>
            <S.Li>
              <Link href="/about">Firma</Link>
            </S.Li>
            <S.Li>
              <Link href="/offers">Oferty</Link>
            </S.Li>
            <S.Li>
              <Link href="/contact">Kontakt</Link>
            </S.Li>
          </S.Ul>
        </S.NavDiv>
      </S.DownContact>

      <S.BurgerMenu open={burgerOpen}>
        <ul>
          <li>
            <Link href="/" onClick={() => setBurgerOpen(false)}>
              Strona Główna
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setBurgerOpen(false)}>
              Firma
            </Link>
          </li>
          <li>
            <Link href="/offers" onClick={() => setBurgerOpen(false)}>
              Oferty
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setBurgerOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </S.BurgerMenu>
    </S.Header>
  );
};

export default Header;
