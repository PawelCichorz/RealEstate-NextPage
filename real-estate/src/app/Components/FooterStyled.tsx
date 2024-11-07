import styled from 'styled-components';
import Link from 'next/link';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  margin-bottom: 0px;

  font-size: 12px;
`;

export const FooterDown = styled.p`
  width: 100%;
  background: black;
  color: #fff;
  padding: 10px;
`;

export const Box = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  background-color: #dcd7d7;
  color: black;
  padding: 10px;
  text-align: center;
  margin-bottom: 0px;
  & > * {
    width: 20%;
  }
  h3 {
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  p {
    color: black;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  p {
    color: black;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
`;

export const Num = styled.div`
  padding: 2px;
  color: red;
  p {
    color: red;
  }
`;

export const divOneTwo = styled.div`
  margin-bottom: 15px;
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const SocialIconLink = styled.a`
  color: blue;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

export const StyledLink = styled(Link)`
  padding: 3px;
`;
