import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 758px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 758px) {
    width: 100%;
  }
`;

export const MainImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 600px;

  @media (max-width: 758px) {
    height: 300px; /* Zmniejszenie wysokości na mniejszych ekranach */
  }
`;

export const GalleryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

export const PromoteButton = styled.button`
  background-color: #4a4a4a;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 5px;

  &:hover {
    background-color: #333333;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #1c1c1c;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  transition:
    background-color 0.3s,
    box-shadow 0.3s;
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  background-color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
`;

export const NextButton = styled.button`
  position: absolute;
  right: 10px;
  background-color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
`;

export const GalleryImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
`;

export const DetailsWrapper = styled.div`
  padding: 5px;
  display: flex;
  text-align: center;

  p {
    padding: 10px;
    font-size: 1em;
  }

  strong {
    font-weight: bold;
  }

  @media (max-width: 758px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PriceParagraph = styled.p`
  display: inline-block;
  background-color: #ff0000;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  margin: 0;
`;

export const SearchPromoted = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  @media (max-width: 758px) {
    width: 100%;
  }
`;
