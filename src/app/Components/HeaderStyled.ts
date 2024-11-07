import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  background: white;
  color: grey;
  z-index: 1000;
`;

export const UpContact = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 758px) {
    & > div:last-child {
      display: none;
    }
  }
`;

export const NavDiv = styled.nav`
  display: flex;

  @media (max-width: 758px) {
    display: none;
  }
`;

export const DownContact = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 758px) {
    justify-content: space-around;
  }
`;

export const LoginDiv = styled.div`
  padding: 2px;
  margin-left: 30px;
`;

export const ContactDiv = styled.div`
  display: flex;

  p {
    margin-right: 40px;
  }
`;

export const BurgerButton = styled.div`
  display: none;
  cursor: pointer;
  margin-right: 20px;

  div {
    width: 25px;
    height: 3px;
    background-color: grey;
    margin: 4px;
    transition: 0.4s;
  }

  @media (max-width: 758px) {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Li = styled.li`
  margin-right: 40px;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    border-bottom: solid 1px red;
  }
`;

export const BurgerMenu = styled.div<{ open: boolean }>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }

  li {
    margin: 20px 0;

    a {
      font-size: 24px;
      color: grey;
      text-decoration: none;
      &:hover {
        color: red;
      }
    }
  }
`;
