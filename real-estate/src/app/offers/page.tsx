'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import RedBanner from '../Components/RedBanner';
import Search from '../Components/Search';
import Image from 'next/image'; 
import { ObjectId } from 'mongodb';
import * as S from './offersStyled';

interface IOffer {
  _id: ObjectId; 
  rodzaj: 'sprzedaż' | 'wynajem';
  kategoria: 'dom' | 'działka' | 'mieszkanie';
  gmina: 'Skawina' | 'Brzeźnica' | 'Kraków';
  miejscowość: 'Skawina' | 'Radziszów' | 'Borek Szlachecki' | 'Brzeźnica' | 'Sosnowice' | 'Kraków' | 'Rzozów';
  powierzchnia: number;
  cena: number;
  woda: 'tak' | 'nie';
  gaz: 'tak' | 'nie';
  prąd: 'tak' | 'nie';
  opis: string;
  imageUrls: string[]; // Zmiana na tablicę zdjęć, jeśli jest ich więcej
  date: string;
}

function Offers() {
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const truncateDescription = (description: string, wordLimit: number) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/api/offers');
        if (!response.ok) {
          throw new Error('Failed to fetch offers');
        }
        const data = await response.json();
        setOffers(data);
      } catch (err) {
        setError('Failed to fetch offers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <RedBanner 
    text="Oferty"
    buttonText=""
    buttonStyle={{ border: 'none' }}  // Brak ramki przycisku
    textStyle={{marginLeft:'20px' }}
    divStyle={{justifyContent: 'flex-start' }}  // Justify-content na start
  />
    <S.Container>
     
      <S.OffersList>
        {offers.map((offer) => (
          <S.OfferCard key={offer.date}>
            <S.ImageWrapper>
            {offer.imageUrls.length > 0 ? (
            <Image
              src={offer.imageUrls[0]} // Pierwsze zdjęcie
              alt={`Offer Image 1`}
              width={200}
              height={300}
            />
          ) : (
            <p>No images available</p>
          )}
            </S.ImageWrapper>
            <S.DetailsWrapper>
              <div>
              <h2><p> {offer.kategoria}</p> - {offer.rodzaj === 'sprzedaż' ? 'sprzedaż' : 'wynajem'}</h2>
              <p> {offer.miejscowość}</p>
              <S.PriceParagraph> {offer.cena} PLN</S.PriceParagraph>
              <p><strong>Opis:</strong> {truncateDescription(offer.opis, 10)}</p>
              <Link href={`/offers/${offer._id}`} passHref>
      <S.MoreButton>Więcej</S.MoreButton>
    </Link>
              </div>
              <div>  
              <p><strong>Gmina:</strong> {offer.gmina}</p>
              
              <p><strong>Powierzchnia:</strong> {offer.powierzchnia} m²</p>
              
              <p><strong>Woda:</strong> {offer.woda}</p>
             </div>
            
             
            </S.DetailsWrapper>
          </S.OfferCard>
        ))}
      </S.OffersList>
      <Search/>
    </S.Container>
    </>
  );
}

export default Offers;
