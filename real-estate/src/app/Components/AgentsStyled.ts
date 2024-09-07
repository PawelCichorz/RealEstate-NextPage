import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
  max-width: 350px;
  align-items: center;
  justify-content: center;
  color: #fff;

  h2 {
    color: black;
    margin-bottom: 10px;
  }
`;

export const Box = styled.div`
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const Name = styled.div`
  padding: 2px;
  display: flex;
  font-weight: 500;
`;

export const Phone = styled.div`
  padding: 2px;
  display: flex;
  font-weight: 500;

  p {
    margin-left: 3px;
  }
`;

export const Email = styled.div`
  display: flex;
  font-weight: 500;
  p {
    color: red;
    margin-left: 3px;
    padding: 0px 2px;
  }
`;
