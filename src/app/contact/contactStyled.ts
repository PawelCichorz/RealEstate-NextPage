import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;

  @media (max-width: 758px) {
    flex-direction: column;
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 758px) {
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormField = styled.div`
  margin-bottom: 16px;

  & input,
  & textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export const SocialLinks = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 8px;
  }

  .flex {
    display: flex;
    gap: 10px; /* Odstęp między ikonami */
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MapWrapper = styled.div`
  margin-top: 10px;
  iframe {
    width: 100%; /* Zmiana szerokości na 100% dla responsywności */
    height: 400px; /* Ustal wysokość */
    border: 0;
  }
`;
