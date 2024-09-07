import styled from 'styled-components';

// Główne kontener wyszukiwarki
export const Search = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px; // Ustawienie maksymalnej szerokości
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin: 10px;
`;

// Wspólne style dla wszystkich selectów i inputów
export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  outline: none;

  &:focus {
    border-color: #999;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  outline: none;

  &:focus {
    border-color: #999;
  }
`;

// Kontener dla pól "od" i "do"
export const RangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RangeInput = styled(Input)`
  width: 48%; // Pola będą obok siebie
`;

// Styl dla przycisku "Szukaj"
export const SearchButton = styled.button`
  padding: 10px;
  margin-top: 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #e60000;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #cc0000;
  }

  &:focus {
    outline: none;
  }
`;
