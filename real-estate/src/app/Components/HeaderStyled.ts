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

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Li = styled.li`
  margin-right: 40px;
  padding: 2px a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    border-bottom: solid 1px red;
  }
`;

export const NavDiv = styled.nav`
  display: flex;
`;

export const UpContact = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const DownContact = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
