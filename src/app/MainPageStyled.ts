'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
`;

export const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const PromotedandSearch = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 758px) {
    flex-direction: column;
    align-items: center;
  }
`;
