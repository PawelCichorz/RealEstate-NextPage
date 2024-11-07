import styled from 'styled-components';
import Link from 'next/link';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 0;
  font-size: 12px;

  @media (max-width: 758px) {
    font-size: 8px;
  }
`;

export const FooterDown = styled.p`
  width: 100%;
  background: black;
  color: #fff;
  padding: 10px;
  text-align: center;

  @media (max-width: 758px) {
    font-size: 8px;
    padding: 8px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #dcd7d7;
  color: black;
  padding: 10px;
  text-align: center;
  margin-bottom: 0;

  & > * {
    width: 20%;
  }

  h3 {
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  @media (max-width: 758px) {
    flex-direction: column;
    padding: 8px;

    & > * {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;

  p {
    color: black;
    @media (max-width: 758px) {
      width: 300px;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  text-align: center;

  p {
    color: black;
  }

  @media (max-width: 758px) {
    padding: 5px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;

  @media (max-width: 758px) {
    padding: 5px;
  }
`;

export const Num = styled.div`
  padding: 2px;
  color: red;

  p {
    color: red;
  }

  @media (max-width: 758px) {
    font-size: 0.9rem;
  }
`;

export const divOneTwo = styled.div`
  margin-bottom: 15px;

  @media (max-width: 758px) {
    margin-bottom: 10px;
  }
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;

  @media (max-width: 758px) {
    padding: 5px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 758px) {
    gap: 10px;
    margin-top: 8px;
  }
`;

export const SocialIconLink = styled.a`
  color: blue;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: red;
  }

  @media (max-width: 758px) {
    font-size: 20px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 3px;

  @media (max-width: 758px) {
    padding: 2px;
  }
`;
