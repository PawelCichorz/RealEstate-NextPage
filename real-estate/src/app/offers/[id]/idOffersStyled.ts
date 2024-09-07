import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

// Styl dla kontenera głównego zdjęcia
export const MainImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 600px;
`;

// Styl dla kontenera galerii
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

// Styl dla przycisku zamknięcia galerii
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
  background-color: #4a4a4a; /* Szary kolor tła */
  color: white; /* Biały tekst */
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px; /* Trochę większy tekst */
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Dodanie delikatnego cienia */
  margin: 5px;

  &:hover {
    background-color: #333333; /* Ciemniejszy szary na hover */
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15); /* Mocniejszy cień na hover */
  }

  &:active {
    background-color: #1c1c1c; /* Jeszcze ciemniejszy szary po kliknięciu */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Mniejszy cień po kliknięciu */
  }

  transition:
    background-color 0.3s,
    box-shadow 0.3s; /* Płynna zmiana kolorów i cieni */
`;

// Styl dla przycisku poprzedniego zdjęcia
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

// Styl dla przycisku następnego zdjęcia
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

// Styl dla zdjęcia w galerii
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
`;

export const PriceParagraph = styled.p`
  display: inline-block; /* Paragraf zajmuje tylko tyle miejsca, ile ma tekst */
  background-color: #ff0000; /* Czerwone tło */
  color: #ffffff; /* Biały tekst */
  padding: 5px 10px; /* Dodanie odrobiny wewnętrznego marginesu dla lepszego wyglądu */
  border-radius: 4px; /* Zaokrąglenie rogów */
  font-weight: bold; /* Pogrubienie tekstu */
  margin: 0; /* Usunięcie marginesu, aby nie wpływał na inne elementy */
`;

export const SearchPromoted = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;
