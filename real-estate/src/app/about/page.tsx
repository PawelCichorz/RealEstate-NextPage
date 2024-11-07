'use client';
import * as S from './AboutStyled';
import Search from '../Components/Search';
import SmallPromotedOffer from '../Components/SmallPromotedOffer';
import RedBanner from '../Components/RedBanner';
import Comments from '../Components/Comments';

const About = () => {
  return (
    <>
      <RedBanner
        text="Firma"
        buttonText=""
        buttonStyle={{ border: 'none' }}
        textStyle={{ marginLeft: '20px' }}
        divStyle={{ justifyContent: 'flex-start' }}
      />
      <S.Container>
        <S.About>
          Biuro Pośrednictwa w Obrocie Nieruchomości - NIERUCHOMOŚCI PAWŁOWSKI -
          zostało założone w 2009 r przez licencjonowanego pośrednika w obrocie
          nieruchomościami Pawła Pawłowskiego (nr wpisu 4202), członka
          Małopolskiego Stowarzyszenia Pośredników W Obrocie Nieruchomościami
          (MSPON). Przedmiotem działalności biura jest pośredniczenie w zakupie
          i sprzedaży nieruchomości: działek o dowolnym przeznaczeniu, domów,
          mieszkań, lokali użytkowych, w tym w szczególności zlokalizowanych na
          terenie powiatów: krakowskiego, myślenickiego, wadowickiego i
          wielickiego. Posiadamy bardzo szeroką i urozmaiconą ofertę
          nieruchomości we wskazanej lokalizacji, dzięki czemu możemy
          zaproponować naszym Klientom najciekawsze i odpowiadające im
          indywidualnym oczekiwaniom nieruchomości. Pośredniczymy także w
          zawieraniu umów najmu i dzierżawy m. in. obiektów komercyjnych lokale
          użytkowe, obiekty handlowe, powierzchnie produkcyjne i magazynowe,
          biura, hale, domów i mieszkań oraz działek (budowlanych, rolnych,
          rekreacyjnych, przemysłowych).Oferujemy domy, działki, lokale,
          mieszkania, nieruchomości komercyjne w powiatach: krakowski, wadowicki
          i myślenicki a w szczególności w następujących lokalizacjach: Skawina,
          Brzeźnica, Stryszów, Lanckorona, Kalwaria Zebrzydowska, Mogilany,
          Siepraw i Myślenice oraz nieruchomości nad zalewem Świnna Poręba i w
          okolicach Wadowic.
          <S.Span />
          Dzięki zdobytemu doświadczeniu gwarantujemy profesjonalne i rzetelne
          wykonanie zleconych nam zadań i stały kontakt z Klientem. Zapewniamy
          kompleksową i efektywną pomoc w poszukiwaniu nabywców dla
          przyjmowanych ofert nieruchomości jak też w wyszukiwaniu dla naszych
          Klientów interesujących ich nieruchomości. Do każdego klienta
          podchodzimy indywidualnie i z wielkim zaangażowaniem. Wyszukujemy
          grunty pod inwestycje, współpracujemy z firmami developerskimi. Aby
          rozszerzyć zakres i różnorodność naszej oferty współpracujemy z
          wieloma innymi biurami pośrednictwa w obrocie nieruchomościami.
          <S.Span />
          Zapewniamy pełne przygotowanie i obsługę transakcji zawieranych za
          naszym pośrednictwem. Kompletujemy dokumentację niezbędną do zawarcia
          umów, pomagamy w uzyskiwaniu niezbędnych zezwoleń od organów
          administracji rządowej i samorządowej, prowadzimy negocjacje,
          koordynujemy prace geodezyjne. Działamy w oparciu o ustawę o
          gospodarce nieruchomościami z dnia 21 sierpnia 1997 r., przestrzegamy
          Standardów zawodowych pośrednika w obrocie nieruchomościami oraz
          Kodeks etyki zawodowej. Zawsze przestrzegamy zasad etyki i tajemnicy
          zawodowej. Współpracujemy z kancelarią radcy prawnego, dzięki czemu
          możemy zapewnić naszym Klientom pomoc w ustalaniu i regulowaniu stanów
          prawnych nieruchomości, przeprowadzaniu postępowań spadkowych, prawną
          obsługę procesów inwestycyjnych, prawidłowe sporządzenie i opiniowanie
          umów sprzedaży, najmu i dzierżawy nieruchomości.
          <S.Span />
          Stale współpracujemy z kancelariami notarialnymi, rzeczoznawcami
          majątkowymi, geodetami i architektami.Informujemy, że nasze biuro jest
          ubezpieczone w zakresie odpowiedzialności cywilnej z tytułu
          prowadzenia działalności pośrednictwa w obrocie nieruchomościami.
          Oferujemy pomoc w uzyskaniu korzystnych warunków kredytowych przy
          zakupie nieruchomości za naszym pośrednictwem. Dla naszych Klientów
          negocjujemy promocyjne warunki. Naszym atutem jest rzetelność i
          skuteczność, do każdej sprawy podchodzimy z pasją i zaangażowaniem.
          Jeżeli chcesz skutecznie i korzystnie sprzedać lub kupić nieruchomość
          Biuro Obrotu Nieruchomościami Pawłowski zaprasza do współpracy!
          <Comments />
        </S.About>

        <S.SearchPromoted>
          <Search />
          <SmallPromotedOffer />
        </S.SearchPromoted>
      </S.Container>
    </>
  );
};

export default About;
