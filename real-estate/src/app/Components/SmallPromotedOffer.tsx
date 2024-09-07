'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ObjectId } from 'mongodb';
import * as S from './SmallPromotedOfferStyle';
import Image from 'next/image';

interface IOffer {
  _id: ObjectId;
  rodzaj: 'sprzedaż' | 'wynajem';
  kategoria: 'dom' | 'działka' | 'mieszkanie';
  gmina: 'Skawina' | 'Brzeźnica' | 'Kraków';
  miejscowość:
    | 'Skawina'
    | 'Radziszów'
    | 'Borek Szlachecki'
    | 'Brzeźnica'
    | 'Sosnowice'
    | 'Kraków'
    | 'Rzozów';
  powierzchnia: number;
  cena: number;
  woda: 'tak' | 'nie';
  gaz: 'tak' | 'nie';
  prąd: 'tak' | 'nie';
  opis: string;
  imageUrls: string[];
  date: string;
  promote: boolean;
}

const SmallPromotedOffer = () => {
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromotedOffers = async () => {
      try {
        const response = await fetch('/api/offers?promote=true');
        if (!response.ok) {
          throw new Error('Failed to fetch offers');
        }
        const data = await response.json();
        setOffers(data.offers);
      } catch (err) {
        setError('Failed to fetch promoted offers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotedOffers();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (offers.length === 0) return <p>No promoted offers available</p>;

  return (
    <S.Container>
      <h1>Okazje</h1>
      {offers.map((offer) => (
        <Link href={`/offers/${offer._id}`} passHref key={offer._id.toString()}>
          <S.OfferCard>
            <S.ImageWrapper>
              <Image
                src={offer.imageUrls[0]} // Pierwsze zdjęcie
                alt={`Offer Image 1`}
                width={100}
                height={200}
              />
            </S.ImageWrapper>
            <S.DetailsWrapper>
              <S.infoDiv>
                <p> {offer.miejscowość}</p>
                <p>
                  {' '}
                  {offer.kategoria} -{' '}
                  {offer.rodzaj === 'sprzedaż' ? 'sprzedaż' : 'wynajem'}
                </p>
                <S.PriceParagraph> {offer.cena} PLN</S.PriceParagraph>
              </S.infoDiv>
            </S.DetailsWrapper>
          </S.OfferCard>
        </Link>
      ))}
    </S.Container>
  );
};

export default SmallPromotedOffer;
