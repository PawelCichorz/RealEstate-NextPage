import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  padding: 20px;
`;

 const OffersList = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 80%;;
  padding: 20px;
`;
 const OfferCard = styled.div`
 max-height:300px;
  display: flex;
 
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 margin:15px;
`;

const ImageWrapper = styled.div`
  position: relative; 
  height: auto; 
  display: flex; 
justify-content:center;
  flex-direction:column
`;

const DetailsWrapper = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;



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



const PriceParagraph = styled.p`
  background-color:red;
 max-width: 130px;
  padding: 5px 2.5px;
  color: white;
`;

 const MoreButton = styled.button`
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

export { Container, DetailsWrapper, ImageWrapper, OfferCard, OffersList,PriceParagraph, MoreButton};
