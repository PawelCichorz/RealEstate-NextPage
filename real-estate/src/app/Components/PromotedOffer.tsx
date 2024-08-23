'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ObjectId } from 'mongodb'
import * as S from './PromottedOfferStyles'; 
import Image from 'next/image'; 


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
    imageUrls: string[];
    date: string;
    promote: boolean;
  }

const PromotedOffers: React.FC = () => {
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const truncateDescription = (description: string, wordLimit: number) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  useEffect(() => {
    const fetchPromotedOffers = async () => {
      try {
        const response = await fetch('/api/offers');
        if (!response.ok) {
          throw new Error('Failed to fetch offers');
        }
        const data: IOffer[] = await response.json();
        setOffers(data.filter(offer => offer.promote));
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
      {offers.map(offer => (
        <S.OfferCard key={offer._id.toString()}>
          <S.ImageWrapper>
          <Image
              src={offer.imageUrls[0]} // Pierwsze zdjęcie
              alt={`Offer Image 1`}
              width={200}
              height={300}
            />
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
    </S.Container>
  );
};

export default PromotedOffers;
