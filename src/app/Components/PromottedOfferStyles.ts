import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 870px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  @media (max-width: 758px) {
    width: 100%;
    padding: 10px;
  }
`;

export const OfferCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 759px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
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
  }

  @media (max-width: 758px) {
    height: 150px;
  }
`;

export const DetailsWrapper = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  @media (max-width: 758px) {
    padding: 10px;
  }
`;

export const PriceParagraph = styled.p`
  background-color: red;
  max-width: 130px;
  padding: 5px 2.5px;
  color: white;

  @media (max-width: 758px) {
    font-size: 0.9em;
  }
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

  @media (max-width: 758px) {
    font-size: 12px;
  }
`;
