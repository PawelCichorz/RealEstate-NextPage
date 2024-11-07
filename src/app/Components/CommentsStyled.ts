import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  @media (max-width: 758px) {
    max-width: 330px;
    font-size: 1.2rem;
    text-align: center;
  }
  h2 {
    margin-bottom: 8px;
    font-size: 1.5rem;

    @media (max-width: 758px) {
      max-width: 330px;
      font-size: 1.2rem;
      text-align: center;
    }
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

  @media (max-width: 758px) {
    padding: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const Name = styled.div`
  margin-top: 10px;
  font-weight: 700;
  color: #000;
  font-size: 1.2rem;

  @media (max-width: 758px) {
    font-size: 1rem;
  }
`;

export const Comments = styled.div`
  font-weight: 500;
  color: #555;
  margin-bottom: 10px;
  font-size: 1rem;

  @media (max-width: 758px) {
    font-size: 0.9rem;
  }
`;

export const Navigation = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;

  @media (max-width: 758px) {
    margin-top: 10px;
  }
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

  @media (max-width: 758px) {
    width: ${({ isActive }) => (isActive === 'true' ? '12px' : '8px')};
    height: ${({ isActive }) => (isActive === 'true' ? '12px' : '8px')};
    margin: 0 4px;
  }
`;
