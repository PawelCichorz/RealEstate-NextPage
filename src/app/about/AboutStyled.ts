import styled from 'styled-components';
import RedBanner from '../Components/RedBanner';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  font-size: 10px;
  min-height: 70vh;
  margin-top: 20px;
  @media (max-width: 758px) {
    flex-direction: column;
    align-items: center;
    padding: 2px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  max-width: 70%;
`;

export const SearchPromoted = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const Span = styled.span`
  display: block;

  height: 15px;
`;

export const StyledRedBanner = styled(RedBanner)`
  div {
    justify-content: flex-start;
  }
  .red-banner-button {
    border: none;
  }
  .red-banner-button.text {
    margin-left: 20px;
  }
`;
