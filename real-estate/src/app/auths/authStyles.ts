import styled from "styled-components";
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  min-height: 60vh;
`;

const ButtonOffers = styled.button`
   background-color: red;
   color:white;
  border-radius: 8px;
  padding: 7px 13px;
  width: 200px;
  margin-bottom: 30px;
`;

const ButtonPromote = styled.button`
   background-color: red;
   color:white;
  border-radius: 8px;
  padding: 7px 13px;
  width: 200px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  
  margin-bottom: 30px; 
`;


export {Container ,ButtonOffers,ButtonPromote,StyledLink}