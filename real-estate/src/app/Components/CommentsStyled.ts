import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  h2 {
    margin-bottom: 8px;
  }
`;

export const Box = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Name = styled.div`
  margin-top: 10px;
  font-weight: 700;
  color: #000;
`;

export const Comments = styled.div`
  font-weight: 500;
  color: #555;
  margin-bottom: 10px;
`;

export const Navigation = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;

interface NavButtonProps {
  isActive: string;
}

export const NavButton = styled.button<NavButtonProps>`
  width: ${({ isActive }) => (isActive === 'true' ? '14px' : '10px')};
  height: ${({ isActive }) => (isActive === 'true' ? '14px' : '10px')};
  background-color: ${({ isActive }) =>
    isActive === 'true' ? '#000' : '#ccc'};
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    transform: scale(1.1);
  }
`;
