import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const OfferCard = styled.div`
  display: flex;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.3s;
    padding: 2px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  font-size: 10px;

  h2 {
    display: flex;
    margin: 0;
    font-size: 1.5em;
  }

  p {
    padding: 5px;
    font-size: 1em;
  }

  strong {
    font-weight: bold;
  }
`;
export const PriceParagraph = styled.p`
  background-color: red;
  display: inlinw-block;
  padding: 2px 5px;
  color: white;
  margin: 1px;
  border-radius: 5px;
`;

export const MoreButton = styled.button`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #0070f3;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #005bb5;
  }
`;
export const infoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 10px;
  font-weight: 200;
  margin-left: 14px;
`;
