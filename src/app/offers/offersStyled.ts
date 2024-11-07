import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 758px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const OffersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 20px;

  @media (max-width: 758px) {
    width: 100%;
  }
`;

const OfferCard = styled.div`
  max-height: 300px;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;

  @media (max-width: 758px) {
    flex-direction: column;
    max-height: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 250px;

  @media (max-width: 758px) {
    width: 100%;
    height: 200px;
  }
`;

const DetailsWrapper = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  h2 {
    display: flex;
    margin: 0;
    font-size: 1.5em;

    @media (max-width: 758px) {
      font-size: 1.2em;
    }
  }

  p {
    padding: 5px;
    font-size: 1em;

    @media (max-width: 758px) {
      font-size: 0.9em;
    }
  }

  strong {
    font-weight: bold;
  }
`;

const PriceParagraph = styled.div`
  display: inline-block;
  max-width: 130px;
  padding: 5px 2.5px;

  p {
    background-color: red;
    color: white;
    display: inline-block;
  }

  @media (max-width: 758px) {
    max-width: 100px;
  }
`;

const MoreButton = styled.button`
  display: flex;
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  @media (max-width: 758px) {
    width: 100%;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 758px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const PageNumber = styled.div`
  margin: 0.5px;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 758px) {
    margin: 5px;
    padding: 8px;
  }
`;

export {
  Container,
  DetailsWrapper,
  ImageWrapper,
  OfferCard,
  OffersList,
  PriceParagraph,
  MoreButton,
  Box,
  Pagination,
  PageNumber,
};
