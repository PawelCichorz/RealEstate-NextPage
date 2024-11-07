import styled from 'styled-components';

export const RedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: red;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  color: white;

  @media (max-width: 758px) {
    font-size: 10px;
  }

  .red-banner-button {
    margin-left: 30px;
    padding: 10px 15px;
    border: solid 2px white;
  }

  .red-banner-text {
    margin-left: 0px;
  }
`;
